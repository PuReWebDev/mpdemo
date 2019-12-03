import React, { useState } from "react"
import PropTypes from "prop-types"
import { Carousel, CarouselItem, CarouselControl, Row, Col } from "reactstrap"
import { Fade } from "react-reveal"

export const SliderContent = props => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)
  const { parallax, hasArrows, content } = props
  const images = props.content.map(c => c.footer_image)
  /*const subMenu = props.content.map(s => ({
      logo: s.footer_logo,
      color: s.footer_color,
      content: s.footer_content,
    }))*/

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = newIndex => {
    if (animating) return
    setActiveIndex(newIndex)
  }

  const updateSubmenu = () => {
    setAnimating(true)
    //Update active button index :D
  }

  const slides = [images || []].map((image, i) => {
    return (
      <CarouselItem
        className="h-75"
        tag="div"
        key={i}
        onExiting={updateSubmenu}
        onExited={() => setAnimating(false)}
      >
        <Fade ssrFadeout>
          <Row style={{ padding: 0 }}>
            {/* subMenu.length > 0 ? (
            <Col className="padding-none">
            {renderSubmenu()}
            {hasArrows ? (
          <>
              <CarouselControl className="carousel-control-next-bottom" direction="prev" directionText="Previous" onClickHandler={previous} />
              <CarouselControl className="carousel-control-next-bottom" direction="next" directionText="Next" onClickHandler={next} />
          </>
        ) : null }
            </Col>)  : null */}
            <Col className="padding-none">
              <img
                style={{
                  filter: "brightness(40%)",
                  width: "100%",
                  height: "100%",
                  padding: 0,
                }}
                src={image}
              />
            </Col>
          </Row>
        </Fade>
      </CarouselItem>
    )
  })

  return (
    <div>
      <style>
        {`.matrix-carousel {
                max-width: 100%;
                top: 0;
                background: black;
                min-height: '700px';  
              }`}
      </style>
      <Fade ssrFadeout>
        <Carousel
          style={
            parallax
              ? {
                  backgroundAttachment: "fixed",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }
              : {}
          }
          className="matrix-carousel"
          activeIndex={activeIndex}
          next={next}
          previous={previous}
        >
          {slides}
        </Carousel>
      </Fade>
    </div>
  )
}

SliderContent.propTypes = {
  colors: PropTypes.array,
  images: PropTypes.array.isRequired,
  delay: PropTypes.number,
  hasArrows: PropTypes.bool,
}

SliderContent.defaultProps = {
  colors: null,
  delay: 3000,
  hasArrows: true,
  fullScreen: false,
  subMenu: [],
}
