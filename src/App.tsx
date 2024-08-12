import './App.css';
import { User, MessageCircle } from 'lucide-react';
import { MatchList } from './lib/constants';
import { useEffect, useState } from 'react';
import { GetRandomProfile } from './api/profiles';
import { ProfileInterface } from './lib/interfaces';
import ChatMessages from './components/chat';
import Profiles from './components/profile';
import Matches from './components/matches';

function App() {

  type StateTypes = 'profile' | 'match' | 'chat'

  const [currentScreen, setCurrentScreen] = useState<StateTypes>('profile');
  const [currentProfile, setCurrentProfile] = useState<ProfileInterface>({} as ProfileInterface);

  const getRandomProfile = async () => {
    const profileData = GetRandomProfile();
    const [profile] = await Promise.all([profileData]);
    setCurrentProfile(profile);
  }

  useEffect(()=> {
    getRandomProfile();
  }, []);

  return (
    <div className='max-w-lg mx-auto mt-3'>
      <nav className='flex justify-between mb-6'>

        <User className='cursor-pointer w-8 h-8 hover:w-9 hover:h-9' onClick={() => setCurrentScreen('profile') } />
        <div className='w-9 h-9' />
        <MessageCircle className='cursor-pointer w-8 h-8 hover:w-9 hover:h-9' onClick={() => setCurrentScreen('match')} />
      </nav>
      {currentScreen === 'profile' && <Profiles profile={currentProfile} />}
      {currentScreen === 'match' && <Matches profiles={MatchList} screen={setCurrentScreen} />}
      {currentScreen === 'chat' && <ChatMessages  />}
    </div>
  );
}

export default App