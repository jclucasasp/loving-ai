import './App.css';
import { User, MessageCircle } from 'lucide-react';
import Profiles from './components/profile';
import Matches from './components/matches';
import { MatchList } from './lib/constants';
import { useState } from 'react';

function App() {

  type StateTypes = { screen: 'profile' | 'match' }

  const [currentScreen, setCurrentScreen] = useState<StateTypes>({ screen: 'profile' });

  return (
    <div className='max-w-lg mx-auto mt-3'>
      <nav className='flex justify-between mb-6'>
        
        <User className='cursor-pointer w-8 h-8 hover:w-9 hover:h-9' onClick={() => setCurrentScreen({ screen: 'profile' })} />
        <div className='w-9 h-9'/>
        <MessageCircle className='cursor-pointer w-8 h-8 hover:w-9 hover:h-9' onClick={() => setCurrentScreen({ screen: 'match' })} />
      </nav>
      {currentScreen.screen === 'profile' ? <Profiles /> : <Matches profiles={MatchList}/>}
    </div>
  );
}

export default App