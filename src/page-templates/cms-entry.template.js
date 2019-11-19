import React from "react"

import HomePage from "./home-page.template"
import ContactPage from './contact-page.template'
import PortfolioPage from './portfolio-page.template'
import DefaultPage from "./default-page.template"
import NotFoundPage from "./not-found.template"
import { AppLayout } from "../app-layout.component"
import { safelyGetFrontMatter } from "../cms"

// Extend this template map to allow your users to choose a page layout from the CMS
// If you're only looking for how to specify a different template per content folder, see:
// https://www.gatsbyjs.org/packages/gatsby-mdx/#installation
const componentTemplateMap = {
  "home-page": HomePage,
  "contact-page": ContactPage,
  "portfolio-page": PortfolioPage,
  "hidden-page": NotFoundPage,
}


const CMSTemplate = props => {
  const { pageContext } = props
  const matter = safelyGetFrontMatter(pageContext)
  const { templateKey } = matter
  const Page = componentTemplateMap[templateKey]
  return (
    <AppLayout>
      {Page ? <Page {...props} /> : <DefaultPage {...props} />}
    </AppLayout>
  )
}

export default CMSTemplate
