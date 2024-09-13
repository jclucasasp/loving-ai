import LoggedInUserProvider from './context/logged-in-user-provider.tsx';
import { Toaster } from './components/ui/toaster.tsx';
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
      <LoggedInUserProvider>
      <App />
      <Toaster />
      </LoggedInUserProvider>
)