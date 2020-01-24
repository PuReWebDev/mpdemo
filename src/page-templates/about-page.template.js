import React from "react"

import { SEO } from "../components"
import {
  safelyGetFrontMatter,
} from "../cms"
import { Container, Row, Col } from 'reactstrap'

export const AboutPageTemplate = props => {
  const generateRightPanelRows = rows => {
    return rows.map(panel_images => (
      <div style={{justifyContent: 'center'}} className="row">
          <div className="col-3-section">
          {generateRowStats(panel_images.right_panel_stats)}
          </div>
      </div>
    ))
  }

  const generateRowStats = stats => {
    return stats.map(stat => {
      return (
        <div className="column-3">
        <p className="stat">{stat.panel_number}
        {stat.green_plus ? (<span className="stat__icon">+</span>) : null}</p>
        <p style={{ fontSize: 15 }} className="description">{stat.panel_label}</p>
        </div>
      )
    })
  }

  return (<>
    <SEO title="About Us" />
    <section className="section section--hero section--full section--font-light blackout-section" data-nav-color="light-no-bg">
<div className="blackout-overlay">
<div className="valign--center">
<div className="container container--md">
<blockquote>{props.quote}</blockquote>
<p className="quote-source"><span className="quote-source__author">Paul Ferri</span><span className="text-divider">//</span><span className="quote-source__title">Co-Founder of Matrix Partners</span></p>
</div>

<div className="scroll--indicator">
<div className="scroll">
<i className="fa fa-angle-double-down moveArrow" aria-hidden="true"></i>
</div>
<div className="mouse"></div>
</div>
<div className="cover-image" ></div>
<div className="overlay--full" style={{backgroundColor: '#2f343c'}}></div>
<div className="overlay--gradient-hero"></div>
</div>
</div>
</section>
      <section className="section section--stats section--font-dark blackout-section-neighbor" data-nav-color="dark">
      <div className="section--flex-lg">
         <div className="about-45 in-view-tracker is-in-view">
            <div className="container container--md-left">
            <h6>About Matrix</h6>
            <p>{props.left_panel_title}</p>
            <p>{props.left_panel_content}</p>
            </div>
         </div>
      <div className="about-55">
         <div className="container">
            <div className="flex-row in-view-tracker is-in-view">
               <div className="col-2-section">
                  <div className="column-2">
                          {generateRightPanelRows(props.right_panel_row)}
                            {/*
                          <div className="container">
            <div className="icon-line animate-svg"><img src="/wp-content/themes/matrix-prpl/assets/svg/Line_1.svg"/></div>
            <div className="column animate-svg">
               <img src="/wp-content/themes/matrix-prpl/assets/svg/SeriesA_animated.svg"/>
               <p className="description">Series A</p>
            </div>
            <div className="icon-line animate-svg"><img src="/wp-content/themes/matrix-prpl/assets/svg/Line_1.svg"/></div>
            <div className="column animate-svg">
               <img src="/wp-content/themes/matrix-prpl/assets/svg/SeriesB_animated.svg"/>
               <p className="description">Series B</p>
                            </div>
                            </div>*/}
                   </div>
              </div>
            </div>
           </div>
       </div>
  </div>
   </section>
    </>)
}

const AboutPage = props => {
  return (
    <AboutPageTemplate
      {...safelyGetFrontMatter(props.pageContext)}
      isPreview={false}
    />
  )
}

export default AboutPage
