import React from 'react'
import '../styles/Loading.css'

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-content">
        {/* Wave Animation */}
        <div className="wave-container">
          <div className="wave-bar"></div>
          <div className="wave-bar"></div>
          <div className="wave-bar"></div>
          <div className="wave-bar"></div>
          <div className="wave-bar"></div>
          <div className="wave-bar"></div>
          <div className="wave-bar"></div>
          <div className="wave-bar"></div>
        </div>
      </div>
    </div>
  )
}

export default Loading
