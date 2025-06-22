import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [evetSize, setEvetSize] = useState(16); 
  const [hayirSize, setHayirSize] = useState(16); 
  const [showForm, setShowForm] = useState(false); 

  const handleHayirClick = () => {
    setEvetSize(evetSize * 1.2); 
    setHayirSize(hayirSize * 0.8); 
  };

  const handleEvetClick = () => {
    setShowForm(true); 
    setEvetSize(evetSize * 1.2)
  };

  return (
    <>
      <h1>BENIMLE EVLENIR MISIN??????</h1>
      <div style={{ position: 'relative', height: '100px' }}>
        <button 
          id='evetbtn' 
          style={{ 
            fontSize: `${evetSize}px`,
            position: 'absolute',
            zIndex: 2,
            left: '50%',
            transform: 'translateX(-50%)'
          }}
          onClick={handleEvetClick}
        >
          EVET
        </button>
        <br />
        <br />
        <button 
          id='hayirbtn' 
          style={{ 
            fontSize: `${hayirSize}px`,
            position: 'absolute',
            zIndex: 1,
            left: '50%',
            transform: 'translateX(-50%)'
          }}
          onClick={handleHayirClick}
        >
          HAYIRRRR
        </button>
      </div>
      {showForm && (
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <p>EVLENIYORRUZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ</p>
        </div>
      )}
    </>
  )
}

export default App