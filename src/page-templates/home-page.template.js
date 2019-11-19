import React from "react"

import { Heading, SEO } from "../components"
import { RenderMarkdown } from "../core"
import {
  safelyGetFrontMatter,
  withFallback,
  CMS_SCOPE,
  CMS_COMPONENTS,
} from "../cms"
import { Slider, SliderContent } from '../components'
import Layout from "../components/layout"
//import { Link } from "gatsby"
import { Row, Container } from 'reactstrap'
import { Fade } from 'react-reveal'

export const HomePageTemplate = (props) => {

  function renderContentPanel() {
    console.log("panel" , props)
        return props.panel_content.map(panel => (
          <p>{panel.panel_content_link}</p>
        ))
  }

  function renderSlides() { 
      return props.header_slide.map(hslide => hslide.header_image)
  }

  function renderSliderMenu() {
      return props.header_slide.map(hslide => {
          return {
            header_link: hslide.header_link,
            header_link_key: hslide.header_link_key
          }
      })
  }

  function footerContent() {
       const { footer_slide } = props
       return footer_slide.map(fslide => fslide)
  }

  
  return (
  <article style={{width: '100%'}}>
    <SEO title="Home Page" />
    <Container fluid className="padding-none margin-none">
    <Fade>
    <Slider subMenu={renderSliderMenu()} fullScreen={true} images={renderSlides()}  />
      </Fade>
      <Fade ssrFadeout>
        <Row className="full-outer-text">
          <h2
          className="full-inner-text"
        >
          {props.content_section_one}
          </h2>
        </Row>
        </Fade>
        <Fade ssrFadeout>
        <div className="text-center" style={{ padding: '10% 0' }}>
             {renderContentPanel()}
        </div>
        </Fade>
      <SliderContent
          content={footerContent()}
          parallax={false}
          hasArrows={true}
      />
    </Container>
  </article>
  )
}

const HomePage = (props) => {
  return (
    <HomePageTemplate
      {...safelyGetFrontMatter(props.pageContext)}
      isPreview={false}
    />
  )
}

export default HomePage
/**
 * 
 *       <StaticQuery
      query={graphql`
    query HeadingQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `} 
  render={data => {
    console.log("GraphQL data",data)
    return(
      <Container fluid style={ { marginTop: "-45px", padding: 0 } }>
      <Fade ssrFadeout>
      <Slider subMenu={this.state.subMenu} fullScreen={true} images={this.state.sliderImages}  />
      </Fade>
      <Fade ssrFadeout>
        <Row>
          <h2 style={{
            padding: '25% 55% 10% 5%',
            backgroundColor: '#000000',
            color: '#ffffff'
          }} 
          className="full-inner-text"
        >
          We are a close-knit <span style={{ color: '#67E2A2'}}>team</span> of 
              company builders and former founders.
          </h2>
        </Row>
        </Fade>
        <Fade ssrFadeout>
        <div className="text-center" style={{ padding: '10% 0' }}>
            <p>SUPPORTING FOUNDERS FOR FORTY YEARS.</p>
            <h3>$4B+ Invested, 110+ Acquisitions, 65+ IPOs</h3>
        </div>
        </Fade>
      <SliderContent
          fullScreen={false}
          images={this.state.sliderImages}
          subMenu={this.state.bottomSlider}
      />
  </Container>)}}/>
 * 
 * 
 */
