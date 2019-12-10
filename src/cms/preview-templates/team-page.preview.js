import React from "react"
import { TeamPageTemplate } from "../../page-templates/team-page.template"
import { CatchError } from "../../core"

export const TeamPagePreview = ({ entry }) => (
  <CatchError>
    <TeamPageTemplate {...entry.getIn(["data"]).toJS()} isPreview={true} />
  </CatchError>
)
