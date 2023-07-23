import React, { useState,useEffect } from 'react';
import pavoImage from '../assets/img/pavo.jpeg';
import purcupineImage from '../assets/img/purcupine.jpeg';
import rabitImage from '../assets/img/rabit.jpeg';
import styled from 'styled-components'

const CarouselImg = styled.img` 
    max-width: 500px;
    width: 100%;
    height:auto;
    opacity: 0;
    transition: 1s;
    &.loaded {
        opacity: 1;
    }
`

const Carousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const imgs = [pavoImage, purcupineImage, rabitImage];
  const [loaded, setLoaded] = useState(false)
  const intervalTime = 3000; // Intervalo de tiempo en milisegundos (3 segundos en este caso)
  
  
    const selectNewImage = (index, imgs, next = true) => {
        setLoaded(false);
        setTimeout(()=>{
            const condition = next ? selectedIndex < imgs.length - 1 : selectedIndex > 0;
            const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : imgs.length - 1;
            setSelectedIndex(nextIndex);
      }
  ,500)
}
  const previous = () => {
    selectNewImage(selectedIndex, imgs, false);
  };

  const next = () => {
    selectNewImage(selectedIndex, imgs);
  };

  // Autoplay con useEffect
  useEffect(() => {
    const autoplayTimer = setInterval(next, intervalTime);
    return () => clearInterval(autoplayTimer);
  }, [selectedIndex]);

  return (
    <>
    <div className=''>
      <CarouselImg src={imgs[selectedIndex]} alt="Symon" className={loaded ? "loaded":""} onLoad={()=>setLoaded(true)}/>
      <button onClick={previous}>Previous</button>
      <button onClick={next}>Next</button>
    </div>
    </>
  );
};

export default Carousel;

