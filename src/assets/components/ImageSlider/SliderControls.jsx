import {useState} from 'react';
import {SliderData} from './SliderData'
const SliderControls = () => {
    const [touchPosition, setTouchPosition] = useState(null)
    const [currentIndex, setCurrentIndex] = useState(0)
    const nextImage = () => {
        const isLastImage = currentIndex === SliderData.length - 1
        const newIndex = isLastImage ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }
    const prevImage = () => {
        const isFirstImage = currentIndex === 0 
        const newIndex = isFirstImage ? SliderData.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }
    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }
    const handleTouchMove = (e) => {
        const touchDown = touchPosition
        if(touchDown === null) {
            return
        }
        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch
        diff > 5 ? nextImage() : prevImage()
        setTouchPosition(null)
    }
 return {prevImage, nextImage, currentIndex, setCurrentIndex, SliderData, handleTouchStart, handleTouchMove}
}

export default SliderControls;