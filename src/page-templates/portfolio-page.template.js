import React, { useState } from "react"

import { Heading, SEO } from "../components"
import Layout from "../components/layout"
import { StaticQuery, graphql } from "gatsby"
import { Fade } from 'react-reveal'
import classnames from 'classnames';
import { ParallaxSingle } from '../components/parallax'
//import { RenderMarkdown } from "../core"
import {
  safelyGetFrontMatter,
  withFallback,
  CMS_SCOPE,
  CMS_COMPONENTS,
} from "../cms"
import { TabContent, TabPane, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

export const PortfolioPageTemplate = (props) => {
  console.log("Knocking out the portfolio page" , props)

  //Default to the first one that comes in from the props
  const [menuItem, updateMenuItem] = useState(props.panel[0].menu_key)
  //Toggling description view
  const [descriptionView, updateDescriptionView] = useState(false)
  //Images per menuItem
  const [images, fillImages] = useState([])

  const toggle = tab => {
      console.log("current tab: new tab",menuItem, tab)
      updateMenuItem(tab)
  }

  const flipCard = (tab) => {
    if(descriptionView === tab) {
      updateDescriptionView(false)
    } else {
      updateDescriptionView(tab)
    }
  }

  function renderTabHeader(){
    return (
        <Fade>
    <div className="h-50-header h-50-grayscale h-50 w-100 d-inline-block">
    <div style={{filter: 'none'}}>
    <h1 className="overlay-text" style={{opacity: 1, color: 'white'}}>{props.title}</h1>
    {props.panel.map(pan => {
      console.log("hold up pan",pan)
      return(
        <NavLink
        className={classnames({ active: menuItem === pan.menu_key })}
        style={{display: 'inline-block'}}
        onClick={() => { toggle(pan.menu_key); }}
      >
        {pan.panel_title}
      </NavLink>
      )
    })}
    </div>
</div></Fade>)
}

function renderTab() {
  console.log("descriptionView?" , descriptionView)
  return props.panel.map(pan => {
    let colorIndex = 1
    console.log("renderTab" , pan)
    return(
      <TabPane tabId={pan.menu_key}>
      <Row>
          { pan.panel_images.map(pimage => {
              if((colorIndex + 1) > 5) {
                  colorIndex = 1
              } else {
                  ++colorIndex
              }
              return(
                  <Col sm="3" style={{padding: 0}}>
                  <Fade>
                  <Card className={`fast-transition panel-card panel-${colorIndex}`} body>
                    <img height={60} width={60} src={pimage.panel_image} />
                  </Card>
                  </Fade>
                </Col>
              )
          })}
        </Row>
      </TabPane>
    )
  })
}

  return (
  <article>
    <SEO title="Portfolio Page" />
      <Layout location={`portfolio`}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        {renderTabHeader()}
       <TabContent style={{backgroundColor: 'black'}} activeTab={menuItem}>
        {renderTab()}
      </TabContent>
      </Layout>
  </article>
  )
}

const PortfolioPage = (props) => {
  return (
    <PortfolioPageTemplate
      {...safelyGetFrontMatter(props.pageContext)}
      isPreview={false}
    />
  )
}

export default PortfolioPage
