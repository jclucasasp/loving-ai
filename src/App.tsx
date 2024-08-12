import './App.css';
import { User, MessageCircle } from 'lucide-react';
import { MatchList } from './lib/constants';
import { useState } from 'react';
import ChatMessages from './components/chat';
import Profiles from './components/profile';
import Matches from './components/matches';

function App() {

  type StateTypes = 'profile' | 'match' | 'chat'

  const [currentScreen, setCurrentScreen] = useState<StateTypes>('profile');

  return (
    <div className='max-w-lg mx-auto mt-3'>
      <nav className='flex justify-between mb-6'>

        <User className='cursor-pointer w-8 h-8 hover:w-9 hover:h-9' onClick={() => setCurrentScreen('profile') } />
        <div className='w-9 h-9' />
        <MessageCircle className='cursor-pointer w-8 h-8 hover:w-9 hover:h-9' onClick={() => setCurrentScreen('match')} />
      </nav>
      {currentScreen === 'profile' && <Profiles />}
      {currentScreen === 'match' && <Matches profiles={MatchList} screen={setCurrentScreen} />}
      {currentScreen === 'chat' && <ChatMessages  />}
    </div>
  );
}

export default App