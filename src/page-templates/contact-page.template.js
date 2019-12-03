import React from "react"

import { Heading, SEO } from "../components"
import { Container, Row, Col, Button } from 'reactstrap'
import {
  safelyGetFrontMatter,
} from "../cms"

export const ContactPageTemplate = props => {
  console.log("contact page template props", props)
  function renderHeaderLinks() {
    console.log(props, "whats going wrong here?")
    return props.contact_panel.map(panel => (
        <a href={`#${panel.key}`}>{panel.title}</a>
    ))
  }

  function renderBodyContent() {
    return props.contact_panel.map(panel => {
      console.log(panel, "discovery")
      return(
        <Row className="contact-panel-inner">
            <Col
              xs={4}
              lg={4}
              md={4}
            >
            <p className="contact-panel-inner-title">
              {panel.title}
            </p>
            <hr className="hr-bar"/>
            <p>{panel.display_address}</p>
            <p>{panel.phone_number}</p>
            <p>{panel.email}</p>
            <Button className="contact-panel-inner-button" outline href={panel.directions_link}>GET DIRECTIONS</Button>
            </Col>
            <Col
              xs={8}
              lg={8}
              md={8}
            >
            <div className="contact-panel-right-image"></div>
            <div classNAme="contact-panel-right-map"></div>
            </Col>
        </Row>
      )
    })
  }

  return (
    <article>
      <SEO title="About Us Page" />
      <div className="contact-header">
      <h1>{props.title}</h1>
      <p>{props.sub_title}</p>
      </div>
      {renderHeaderLinks()}
      <Container fluid className="contact-panel">
          {renderBodyContent()}
      </Container>
    </article>
  )
}

const ContactPage = props => {
  return (
    <ContactPageTemplate
      {...safelyGetFrontMatter(props.pageContext)}
      isPreview={false}
    />
  )
}

export default ContactPage
