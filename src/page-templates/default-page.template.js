import React from "react"
import {
  safelyGetFrontMatter,
  withFallback,
} from "../cms"
import { SEO } from "../components"

export const DefaultPageTemplate = props => {
  const { title, body, children } = props
  return (
    <article>
      <SEO title={withFallback(title, "")} />
      <h1 style={{padding: 50}}>404 Template file not found.</h1>
    </article>
  )
}

const DefaultPage = ({ pageContext, ...props }) => {
  return (
    <DefaultPageTemplate
      {...safelyGetFrontMatter(pageContext)}
      {...props}
      isPreview={false}
    />
  )
}

export default DefaultPage
