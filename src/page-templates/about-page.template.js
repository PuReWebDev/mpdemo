import React from "react"

import { Heading, SEO } from "../components"
//import { RenderMarkdown } from "../core"
import {
  safelyGetFrontMatter,
} from "../cms"
import { Container, Row, Col } from 'reactstrap'

export const AboutPageTemplate = props => {
  console.log("about page template props", props)

  const generateRightPanelRows = rows => {
    console.log("rows from generate" , rows)
    return rows.map(panel_images => (
      <Row style={{ justifyContent: 'center' }}>
        {generateRowStats(panel_images.right_panel_stats)}
      </Row>
    ))
  }

  const generateRowStats = stats => {
    return stats.map(stat => {
      console.log("generateRowStats", stat)
      return (
        <Col className="row-stats" md={4} lg={4} sm={6} xs={12}>
          <h3>{stat.panel_number}</h3>
          <span className="plus">{stat.green_plus ? (<p>V</p>): null}</span>
          <p>{stat.panel_label}</p>
        </Col>
      )
    })
  }
  console.log("props?about" ,props)
  return (<>
    <div className="about-container">
      <blockquote style={{fontSize: '40px'}}>
          "{props.quote}"  
      </blockquote>  
    </div>
    <Container className="about-panel">
      <Row>
          <Col className="about-left" lg={4} md={4} sm={4} xs={12}>
          <p>About Matrix</p>
          <p>{props.left_panel_title}</p>
          <hr />
          <p>{props.left_panel_content}</p>
          </Col>
          <Col lg={8} md={8} sm={8} xs={12}>
              {generateRightPanelRows(props.right_panel_row)}
          </Col>
      </Row>
    </Container>
    </>

  )
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
