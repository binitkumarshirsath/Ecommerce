import React, { useState } from 'react'
import images from './Assets/Carouselimages';

export default function Carousel() {
    const[currImg,setCurrImg] = useState(0);

    function prevClick(){
        setCurrImg((prevIndex)=>{
            return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
        })
    }
    function nextClick(){
        setCurrImg((prevIndex)=>{
            return prevIndex === images.length- 1 ? 0 : prevIndex + 1;
        })
    }

  return (  
    <div>
        
        <button onClick={prevClick}>Previous</button>
            <img src={images[currImg]} alt="Carousel" />
        <button onClick={nextClick}>Next</button>
    </div>
  )
}
