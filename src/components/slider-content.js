import React, { useState } from "react"
import PropTypes from "prop-types"
import { Carousel, CarouselItem, CarouselControl, Row, Col } from "reactstrap"
import { Fade } from "react-reveal"
import { RenderMarkdown } from "../core"

export const SliderContent = props => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)
  const { parallax, hasArrows, content } = props
  const images = props.content.map(c => c.footer_image)
  const subMenu = props.content.map(s => ({
      logo: s.footer_logo,
      color: s.footer_color,
      content: s.footer_content,
  }))

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

  const renderSubmenu = () => {
    return subMenu.map(menu => {
      console.log("render submenu" , menu)
      return(
        <div className="left-content-menu portfolio__slide-info">
            <img style={{height: 60, width: 60, margin: 'auto', display: 'block'}} className="portfolio__logo portfolio__logo icon-adjust" src={menu.logo} />
            <RenderMarkdown className="markdown-content portfolio__slide-details" md={menu.content} />
            <small>{menu.signature}</small>
        </div>
      )
    })
  }

  const slides = [images || []].map((image, i) => {
    return (
      <CarouselItem
        tag="div"
        key={i}
        onExiting={updateSubmenu}
        onExited={() => setAnimating(false)}
      >
          <Row style={{ padding: 0, margin: 0 }}>
            {subMenu.length > 0 ? (
            <Col xs={12} sm={6} md={4} lg={4} className="padding-none">
            {renderSubmenu()}
            {hasArrows ? (
            <>
              <CarouselControl className="carousel-control-next-bottom top-75 swiper__button swiper__button--prev" direction="prev" directionText="Previous" onClickHandler={previous} />
              <CarouselControl className="carousel-control-next-bottom top-75 swiper__button swiper__button--next" direction="next" directionText="Next" onClickHandler={next} />
            </>
            ) : null }
            </Col>)  : null }
            <Col xs={0} sm={8} md={8} lg={8} className="padding-none">
              <img
                style={{
                  filter: "brightness(40%)",

                  padding: 0,
                  opacity: 1
                }}
                src={image}
                className="cover-image--hero cover-image--color-blue"
              />
            </Col>
          </Row>
      </CarouselItem>
    )
  })

  return (
    <div >
      <style>
        {`.matrix-carousel {
                max-width: 100%;
                top: 0;
                background: black;
              }`}
      </style>
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
          className="matrix-carousel portfolio__slide swiper-slide section--font-light swiper-no-swiping swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev"
          activeIndex={activeIndex}
          next={next}
          previous={previous}
        >
          {slides}
        </Carousel>
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
