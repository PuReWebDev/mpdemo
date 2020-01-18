import React, { useState } from "react"

import { SEO } from "../components"
import Layout from "../components/layout"
import { Fade } from "react-reveal"
import classnames from "classnames"
//import { RenderMarkdown } from "../core"
import ReactCardFlip from "react-card-flip"
import {
  safelyGetFrontMatter,
} from "../cms"
import {
  TabContent,
  TabPane,
  NavLink,
  Card,
  Button,
  Row,
  Col,
} from "reactstrap"

/**
 * Portfolio page template
 * @param {object} props
 */
export const PortfolioPageTemplate = props => {
  /**@var {string} menuItem current menu item */
  const [menuItem, updateMenuItem] = useState(props.panel[0].menu_key)
  /**@var {integer} descriptionView Current card flipped */
  const [descriptionView, updateDescriptionView] = useState(false)
  /**@var {integer} colorIndex current color */
  let colorIndex = 1

  /**
   * Updates the active tab
   * @param {string} tab
   * @return {void}
   */
  const toggle = tab => {
    updateMenuItem(tab)
  }

  /**
   * Check if card should be flipped.
   * @param {integer} cardId
   * @return {boolean}
   */
  const isFliped = cardId => {
    if (descriptionView === cardId) return true
    return false
  }

  /**
   * Return panel links
   * @param {object} panels
   * @return {JSX}
   */
  const generatePanelMap = panels => {
    return panels.map(pan => {
      return (
        <NavLink
          className={classnames({ active: menuItem === pan.menu_key })}
          style={{ display: "inline-block" }}
          onClick={() => {
            toggle(pan.menu_key)
          }}
        >
          {pan.panel_title}
        </NavLink>
      )
    })
  }

  /**
   * Return current looped color
   * @return {integer} colorIndex
   */
  function getColorIndex() {
    colorIndex + 1 > 5 ? (colorIndex = 1) : ++colorIndex
    return colorIndex
  }

  /**
   * Render page header
   * @return {JSX}
   */
  function renderTabHeader() {
    return (
      <div className="image-text-container">
          <img className="grayscale" src="https://www.matrixpartners.com/wp-content/uploads/2017/11/contact-header-compressed.jpg" />
          <div className="image-text-centered">
            <h1 style={{ opacity: 1, color: "white" }}>{props.title}</h1>
            {generatePanelMap(props.panel)}
          </div>
      </div>
    )
  }

    /**
   * Update or cancel card flip state
   * @param {integer} cardId
   * @return {void}
   */
  function flipCard(cardId) {
    if (descriptionView === cardId) {
      updateDescriptionView(false)
    } else {
      updateDescriptionView(cardId)
    }
  }

  /**
   * Render all panels and cards
   * @return {JSX}
   */
  function renderTab() {
    return props.panel.map(pan => {
      return (
        <TabPane tabId={pan.menu_key}>
          <Row>
            {pan.panel_images.map((pimage, j) => {
              return (
                <Col sm="3" style={{ padding: 0 }}>
                  <Fade>
                    <Card
                      onClick={() => flipCard(j)}
                      className={`${
                        isFliped(j) ? "bg-white" : ""
                      } fast-transition panel-card ${
                        !isFliped(j) ? `panel-${getColorIndex()}` : ""
                      }`}
                      body
                    >
                      <ReactCardFlip
                        isFlipped={isFliped(j)}
                        flipDirection="horizontal"
                      >
                        <div>
                          <img
                            height={60}
                            width={60}
                            src={pimage.panel_image}
                          />
                        </div>
                        <div className="block">
                          <img
                            style={{ top: 0 }}
                            height={70}
                            width={100}
                            className="img-thumbnail"
                            src={pimage.panel_image_alt}
                          />
                          <p>{pimage.panel_description}</p>
                          <Button onClick={e => console.log("clicked")}>
                            Visit Website
                          </Button>
                        </div>
                      </ReactCardFlip>
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
  /**
   * Entry point
   * @return {JSX}
   */
  return (
    <article>
      <SEO title="Portfolio Page" />
      <Layout location={`portfolio`}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        {renderTabHeader()}
        <TabContent style={{ backgroundColor: "black" }} activeTab={menuItem}>
          {renderTab()}
        </TabContent>
      </Layout>
    </article>
  )
}

/**
 * Render page with template
 * @param {object} props
 * @return {JSX}
 */
const PortfolioPage = props => {
  return (
    <PortfolioPageTemplate
      {...safelyGetFrontMatter(props.pageContext)}
      isPreview={false}
    />
  )
}

export default PortfolioPage
