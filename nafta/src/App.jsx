import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const litros = Math.floor(Math.random() * 40) + 1;
  let bkColor;

  if (litros >= 30) {
    bkColor = '#3CFF33';
  } else if (litros > 20 && litros < 30) {
    bkColor = '#FFE933';
  } else if (litros > 10 && litros <= 20) {
    bkColor = '#FFA833';
  } else if (litros >= 0 && litros <= 10) {
    bkColor = '#FF1912';
  }
  return (
    <>
      <div>
        <h2>Indicador de nafta</h2>
        <div style={{backgroundColor: bkColor, padding:'10 px',margin:'10 px', color: 'white' }}>
          Litros: {litros}
        </div>
      </div>
    </>
  )
}

export default App
