import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import InfoBar from '../components/InfoBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Serv from '../services/Serv'
import Contact from '../contacts/Contact'
import GettingStarted from '../gettingstarted/GettingStarted'

const Approute = () => {
  return (
    <div>
      <InfoBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Serv />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/getting-started" element={<GettingStarted />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default Approute
