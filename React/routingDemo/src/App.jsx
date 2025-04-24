import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/Footer'
import Services from './pages/Services'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import './App.css'
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/home' Component={Home} />
        <Route path='/about' Component={About} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' Component={Contact} />
        <Route path='*' Component={NotFound} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
