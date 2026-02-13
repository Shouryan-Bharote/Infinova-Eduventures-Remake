import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router'
import AppRoutes from './routes/AppRoutes'
import FooterAnuj from './components/Footer/FooterAnuj'
import EduventuresNavbar from './components/EduventuresNavbar/EduventuresNavbar'

function App() {
  return (
    <>
      <BrowserRouter>
        <EduventuresNavbar/>
        <AppRoutes/>
        <FooterAnuj/>
      </BrowserRouter>
    </>
  )
}

export default App
