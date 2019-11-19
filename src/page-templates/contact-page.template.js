import React from "react"

import { Heading, SEO } from "../components"
//import { RenderMarkdown } from "../core"
import {
  safelyGetFrontMatter,
  withFallback,
  CMS_SCOPE,
  CMS_COMPONENTS,
} from "../cms"
//import { Slider } from '../components'
//import Layout from "../components/layout"
//import { Link } from "gatsby"
import { Row, Container } from 'reactstrap'
//import { Fade } from 'react-reveal'

export const ContactPageTemplate = (props) => {
    console.log("looking to fix the template" , props)
  
  
    return (
    <article>
      <SEO title="Team Page" />
      <Container fluid style={ { marginTop: "-45px", padding: 0 } }>
  
      </Container>
    </article>
    )
  }
  
  const ContactPage = (props) => {
    return (
      <ContactPageTemplate
        {...safelyGetFrontMatter(props.pageContext)}
        isPreview={false}
      />
    )
  }
  
  export default ContactPage