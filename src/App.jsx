import { useState } from 'react'

import './App.css'
import Navigation from './assets/components/Navbar/Navigation'
import ImageSlider from './assets/components/ImageSlider/ImageSlider'
import Content from './assets/components/Content/Content'

function App() {


  return (
    <div className="App">
      <Navigation/>
      <ImageSlider />
      <Content />
    </div>
  )
}

export default App
