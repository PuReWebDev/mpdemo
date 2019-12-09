import React from "react"

import { Heading, SEO } from "../components"
import { RenderMarkdown } from "../core"
import {
  safelyGetFrontMatter,
  withFallback,
  CMS_SCOPE,
  CMS_COMPONENTS,
} from "../cms"
import { Slider } from '../components'
import Layout from "../components/layout"
//import { Link } from "gatsby"
import { Row, Container } from 'reactstrap'
import { Fade } from 'react-reveal'

export const HomePageTemplate = (props) => {
  console.log("looking to fix the template" , props)

  function renderContentPanel() {
      if(props.isPreview) {
        return props.panel_content.map(panel => (
          <p>{panel.panel_content_link}</p>
        ))
      } else {
        const itterablePanel = [...props.panel_content]
        return itterablePanel.map(panel => (
          <p>{panel.panel_content_link}</p>
        ))
      }
  }

  return (
  <article>
    <SEO title="Home Page" />
    <Container fluid style={ { marginTop: "-45px", padding: 0 } }>
    <Fade>
    {/*<Slider fullScreen={true} images={props.header_slider}  />*/}
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
          {props.content_section_one}
          </h2>
        </Row>
        </Fade>
        <Fade ssrFadeout>
        <div className="text-center" style={{ padding: '10% 0' }}>
             {renderContentPanel()}
        </div>
        </Fade>
      {/*<SliderContent
          fullScreen={false}
          images={this.state.sliderImages}
          subMenu={this.state.bottomSlider}
      />*/}
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
