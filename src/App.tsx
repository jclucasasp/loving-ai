import { ConversationInterface, MatchInterface, ProfileInterface, StateScreenTypes } from './lib/interfaces';
import { TooltipProvider, TooltipContent, TooltipTrigger, Tooltip } from './components/ui/tooltip';
import useLoggedInUserState from './hooks/use-loggedin-user-state';
import { GetProfileById, GetRandomProfile } from './api/profiles';
import ChatMessages from './components/chat-component';
import Profiles from './components/profile-component';
import Matches from './components/matches-component';
import UserProfile from './components/user-profile';
import { User, MessageCircle } from 'lucide-react';
import { Button } from './components/ui/button';
import { useEffect, useState } from 'react';
import SignUp from './auth/sign-up';
import Login from './auth/login';
import './App.css';
import { LogoutAuth } from './api/user-auth';

function App() {


  const { loggedInUser } = useLoggedInUserState();

  const [currentScreen, setCurrentScreen] = useState<StateScreenTypes>('profile');
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
    const autoLogoutOnClose = async (event: BeforeUnloadEvent) => {
      console.log("Auto logout on close");
      await LogoutAuth(loggedInUser?.userId!);
    }

    window.addEventListener('beforeunload', autoLogoutOnClose);

    if (!currentProfile) {
      seedRandomProfile();
    }

    return () => {
      window.removeEventListener('beforeunload', autoLogoutOnClose);
    }

  }, [loggedInUser, currentProfile, currentScreen]);

  if (sessionStorage.length === 0) {
    return <Login setCurrentScreen={setCurrentScreen} />
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

          <Button variant={"link"} className='text-purple-400'
            onClick={() => setCurrentScreen('userProfile')}>
            <p className='font-bold'>Rizz Master: </p>
            {sessionStorage.getItem('firstName') + " " + sessionStorage.getItem('lastName')}
          </Button>

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

      {currentScreen === 'signUp' && <SignUp setScreen={setCurrentScreen} />}

      {currentScreen === 'userProfile' && <UserProfile
        userProfile={loggedInUser} setScreen={setCurrentScreen} />}

      {currentScreen === 'profile' &&
        <Profiles profile={currentProfile}
          setNextProfile={setCurrentProfile}
          isMatchedState={{ isMatched, setIsMatched }}
          matchSate={{ matches, setMatches }} />}

      {currentScreen === 'match' &&
        <Matches setScreen={setCurrentScreen}
          setCurrentProfile={setCurrentProfile}
          setCurrentConversation={setCurrentConversation}
          matchState={{ matches, setMatches }} />}

      {currentScreen === 'chat' &&
        <ChatMessages currentConversation={currentConversation}
          selectedProfile={currentProfile} />}

    </div>
  );
}

export default App