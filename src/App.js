import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Projects from './Components/Projects'


import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Footer from './Components/Footer'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
      </div>
      
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
      
      </Routes>

      <div>
        <Footer />
      </div>
    </Router>

  )
}

export default App

