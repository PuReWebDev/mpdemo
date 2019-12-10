import React from "react"
import PropTypes from "prop-types"

export const Header = ({ img, caption }) => {
  return (
    <div className="row">
      <div className="col-md-12">
        <img
          style={{ filter: "brightness(25%)" }}
          src={img}
          alt="test"
          className="img-responsive"
        />
        <div className="carousel-caption team-header-caption">{caption}</div>
      </div>
    </div>
  )
}

Header.defaultProps = {}
