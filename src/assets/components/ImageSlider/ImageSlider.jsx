import React, { useState } from 'react'
import {SliderData} from './SliderData'
import './imageSlider.css'
import arrowLeft from '../../../../images/icon-previous.svg'
import arrowrRight from '../../../../images/icon-next.svg'

function ImageSlider() {

    const [currentIndex, setCurrentIndex] = useState(0)
 
    const nextImage = () => {
        const isLastImage = currentIndex ===  SliderData.length - 1
        const newIndex = isLastImage ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }
    const prevImage = () => {
        const isFirstImage = currentIndex === 0 
        const newIndex = isFirstImage ? SliderData.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

  return (
    <>
        <div className='sliderContainer'>
            <div className='sliderImage'
            style={{ 
                backgroundImage: `url(${SliderData  [currentIndex].url})`, 
            }}
            ></div>
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