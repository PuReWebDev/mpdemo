import React from "react"
import { AboutPageTemplate } from "../../page-templates/about-page.template"
import { CatchError } from "../../core"

export const AboutPagePreview = ({ entry }) => (
  <CatchError>
    <AboutPageTemplate {...entry.getIn(["data"]).toJS()} isPreview={true} />
  </CatchError>
)
