import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import UserProfile from './context/loged-in-user.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserProfile.Provider value={{
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
    </UserProfile.Provider>
  </StrictMode>,
)
