import React from "react"
import { PortfolioPageTemplate } from "../../page-templates/portfolio-page.template"
import { CatchError } from "../../core"

export const PortfolioPagePreview = ({ entry }) => (
  <CatchError>
    <PortfolioPageTemplate {...entry.getIn(["data"]).toJS()} isPreview={true} />
  </CatchError>
)
