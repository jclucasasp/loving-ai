import { TooltipProvider, TooltipContent, TooltipTrigger, Tooltip } from './components/ui/tooltip';
import { ConversationInterface, MatchInterface, ProfileInterface } from './lib/interfaces';
import { GetProfileById, GetRandomProfile } from './api/profiles';
import useLoggedInUserState from './hooks/use-loggedin-user-state';
import ChatMessages from './components/chat-component';
import Profiles from './components/profile-component';
import Matches from './components/matches-component';
import { User, MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import Login from './auth/login';
import './App.css';

function App() {

  type StateTypes = 'profile' | 'match' | 'chat' | 'login';
  const { loggedInUser } = useLoggedInUserState();

  const [currentScreen, setCurrentScreen] = useState<StateTypes>('profile');
  const [currentProfile, setCurrentProfile] = useState<ProfileInterface | null>(null);
  const [currentConversation, setCurrentConversation] = useState<ConversationInterface>({} as ConversationInterface);
  const [matches, setMatches] = useState<MatchInterface[]>([] as MatchInterface[]);
  const [isMatched, setIsMatched] = useState(false);

  const seedRandomProfile = async (id?: string) => {
    let profileData = {} as Promise<ProfileInterface>;
    if (!id) {
      profileData = GetRandomProfile();
    } else {
      profileData = GetProfileById(id);
    }

    const [profile] = await Promise.all([profileData]);
    setCurrentProfile(profile);
  }

  useEffect(() => {
    if (!currentProfile) {
      seedRandomProfile();
    }

  }, [loggedInUser, currentProfile, matches, isMatched]);

  if (sessionStorage.length === 0) {
    return <Login setCurrentScreen={setCurrentScreen} />;
  }

  return (
    <div className='max-w-lg mx-auto mt-3'>
      <nav className='flex justify-between mb-6'>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger >
              <User className='cursor-pointer w-8 h-8 hover:w-9 hover:h-9' onClick={() => setCurrentScreen('profile')} />
            </TooltipTrigger>
            <TooltipContent>
              <p>Profiles</p>
            </TooltipContent>
          </Tooltip>
          <h3>{sessionStorage.getItem('firstName') + " " + sessionStorage.getItem('lastName')}</h3>
          <div className='w-9 h-9' />
          <Tooltip>
            <TooltipTrigger>
              <MessageCircle className='cursor-pointer w-8 h-8 hover:w-9 hover:h-9' onClick={() => setCurrentScreen('match')} />
            </TooltipTrigger>
            <TooltipContent>
              <p>Matches</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
      {currentScreen === 'profile' && <Profiles profile={currentProfile}
        setNextProfile={setCurrentProfile}
        isMatchedState={{ isMatched, setIsMatched }}
        matchSate={{ matches, setMatches }} />}
      {currentScreen === 'match' && <Matches setScreen={setCurrentScreen}
      
        setCurrentProfile={setCurrentProfile}
        setCurrentConversation={setCurrentConversation}
        matchState={{ matches, setMatches }} />}
      {currentScreen === 'chat' && <ChatMessages currentConversation={currentConversation}
        selectedProfile={currentProfile} />}
    </div>
  );
}

export default App