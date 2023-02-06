import React, { useState } from 'react'
import './imageSlider.css'
import arrowLeft from '../../../../images/icon-previous.svg'
import arrowrRight from '../../../../images/icon-next.svg'
import SliderControls from './SliderControls'


function ImageSlider() {
   
    const {nextImage, prevImage, currentIndex, SliderData, handleTouchStart, handleTouchMove, setCurrentIndex} = SliderControls()
  return (
    <>
        <div className='sliderContainer'>
            <div className='sliderImage'
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            style={{ 
                backgroundImage: `url(${SliderData[currentIndex].url})`, 
            }}
            ></div>
            <div className="smallImages">               
                {SliderData.map((image, index) => (
                  <img key={image.id} 
                  style={{width:`calc(100%/${SliderData.length})`}} 
                  src={image.url}
                  onClick={(e) => setCurrentIndex(index)}
                  />
                ))}
            </div>
            <div className="arrows">
                <img className='arrow' src={arrowLeft} alt="" 
                onClick={prevImage}
               />
                <img className='arrow' 
                src={arrowrRight} alt="" 
                onClick={nextImage}
                />
            </div>
        </div>
    </>
    
  )
}

export default ImageSlider