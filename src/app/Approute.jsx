import React, { useState, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from '../components/Home'
import InfoBar from '../components/InfoBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Loading from '../components/Loading'
import Serv from '../services/Serv'
import Contact from '../contacts/Contact'
import GettingStarted from '../gettingstarted/GettingStarted'

const Approute = () => {
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => setIsLoading(false), 800)
    return () => clearTimeout(timer)
  }, [location.pathname])

  return (
    <div>
      {isLoading && <Loading />}
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
