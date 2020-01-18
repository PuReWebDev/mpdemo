import React from "react"
import { TeamMemberPageTemplate } from "../../page-templates/team-member-page.template"
import { CatchError } from "../../core"

export const TeamPageMemberPreview = ({ entry }) => (
  <CatchError>
    <TeamMemberPageTemplate {...entry.getIn(["data"]).toJS()} isPreview={true} />
  </CatchError>
)
