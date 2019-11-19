import React from 'react'
import PropTypes from 'prop-types'

export const ImageOverText = ({image, content, position, alt}) => {
    return (
      <div className="container">
        <img src={`${image}`} alt={`${alt}`} style={{width:"100%"}} />
        <div className={`${position}`}>{content}</div>
      </div>
    )
}

ImageOverText.defaultProps = {
    position: "centered",
    alt: "Text over image"   
}

ImageOverText.propTypes = {
    image: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    position: PropTypes.oneOf([
        "bottom-left",
        "top-left",
        "top-right",
        "bottom",
        "centered"
    ])
}