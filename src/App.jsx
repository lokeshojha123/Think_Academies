import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import MySelf from './Components/MySelf/MySelf'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import OurWork from './Components/MyWork/OurWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Profile from './Components/Profile/Profile'
const App = () => {
  return (
    <div>
      
      <NavBar></NavBar>
      <MySelf></MySelf>
      <About></About>
      <Services></Services>
      <OurWork></OurWork>
      <Contact></Contact>
      <Footer></Footer>
      <Profile></Profile>
    </div>
  )
}

export default App