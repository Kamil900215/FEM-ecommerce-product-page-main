import { useState } from 'react'

import './App.css'
import Navigation from './assets/components/Navbar/Navigation'
import ImageSlider from './assets/components/ImageSlider/ImageSlider'

function App() {


  return (
    <div className="App">
      <Navigation/>
      <ImageSlider />
    </div>
  )
}

export default App
