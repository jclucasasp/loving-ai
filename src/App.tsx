import './App.css';
import { User, MessageCircle } from 'lucide-react';
import Profiles from './components/profile';
import Matches from './components/matches';
import { MatchList, RandomProfile } from './lib/constants';
import { useEffect, useState } from 'react';
import ChatMessages from './components/chat';
import { GetRandomProfile } from './api/profiles';
import { ProfileInterface } from './lib/interfaces';

function App() {

  type StateTypes = { screen: 'profile' | 'match' | 'chat' }

  const [currentScreen, setCurrentScreen] = useState<StateTypes>({ screen: 'profile' });
  const [currentProfile, setCurrentProfile] = useState<ProfileInterface>({} as ProfileInterface);

  const getRandomProfile = async () => {
    const profileData = GetRandomProfile();
    const [profile] = await Promise.all([profileData]);
    setCurrentProfile(profile);
  }

  useEffect(()=> {
    getRandomProfile();
  }, []);

  console.log(currentProfile);

  return (
    <div className='max-w-lg mx-auto mt-3'>
      <nav className='flex justify-between mb-6'>

        <User className='cursor-pointer w-8 h-8 hover:w-9 hover:h-9' onClick={() => setCurrentScreen({ screen: 'profile' })} />
        <div className='w-9 h-9' />
        <MessageCircle className='cursor-pointer w-8 h-8 hover:w-9 hover:h-9' onClick={() => setCurrentScreen({ screen: 'match' })} />
      </nav>
      {currentScreen.screen === 'profile' && <Profiles profile={currentProfile} />}
      {currentScreen.screen === 'match' && <Matches profiles={MatchList} />}
      {currentScreen.screen === 'chat' && <ChatMessages />}
    </div>
  );
}

export default App