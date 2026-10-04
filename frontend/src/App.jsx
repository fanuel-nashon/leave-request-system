import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import LandingPage from './components/pages/LandingPage'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './components/auth/LoginPage'
import ForgotPassword from './components/auth/ForgotPassword'

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  )
}

export default App
