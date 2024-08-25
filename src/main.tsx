import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LoggedInUserProvider from './context/logged-in-user-provider.tsx';
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <LoggedInUserProvider>
      <App />
      </LoggedInUserProvider>
  </StrictMode>,
)


/* <StrictMode>
<LoggedInUserContext.Provider value={{
  id: "8133d336-d2ca-4e06-94a8-d59c90d959ed",
  firstName: "JC",
  lastName: "Lucas",
  age: 47,
  ethnicity: "White",
  gender: "MALE",
  bio: "Passionate about learning, working out, and new adventures. Always to learn new things and deep conversations!",
  imageUrl: "",
  myersBriggsPersonalityType: "SIGMA"
}}>
  <App />
</LoggedInUserContext.Provider>
</StrictMode>, */
