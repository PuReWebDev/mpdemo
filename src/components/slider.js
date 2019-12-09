import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
} from 'reactstrap';


export const Slider = ({images, delay, hasArrows, fullScreen, subMenu, parallax}) => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const renderSubmenu = () => {
    return (
        <div style={{ 
          position: 'absolute',
          top: 100,
        }}
        >
          {subMenu.map(item => (
              <button style={{fontSize:32, color: 'white', border: null}} className="btn btn-block" onClick={() => goToIndex(item.index)}>
                  {item.title}
               </button>
            ))
          }
        </div>
      )
  }

  const updateSubmenu = () => {
      setAnimating(true)
      //Update active button index :D
  }

  console.log("slider images, header",images)

  const slides = images.map((image, i) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={i}
        onExiting={updateSubmenu}
        onExited={() => setAnimating(false)}
      >
                <img style={{ height: '100vh', filter: 'brightness(40%)'}} src={image} />
      </CarouselItem>
    );
  });

  return (
    <div>
      <style>
        {
          `.custom-tag {
              max-width: 100%;
              top: 0;
              background: black;
            }`
        }
      </style>
      <Carousel
        style={parallax ? {  backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'}: ''}
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        {slides}
        <>
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            { subMenu.length > 0 ? renderSubmenu() : null }
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </>
      </Carousel>
    </div>
  );
}

Slider.defaultProps = {
    delay: 3000,
    hasArrows: false,
    fullScreen: false,
    subMenu: []
}

Slider.propTypes = {
   images: PropTypes.array.isRequired,
   delay: PropTypes.number,
   hasArrows: PropTypes.bool
}
