import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import LandingPage from './components/pages/LandingPage'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './components/pages/auth/LoginPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/login' element={<LoginPage />} />
    </Routes>
  )
}

export default App
