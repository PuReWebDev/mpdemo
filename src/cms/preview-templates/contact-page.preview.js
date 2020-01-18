import React from "react"
import { ContactPageTemplate } from "../../page-templates/contact-page.template"
import { CatchError } from "../../core"

export const ContactPagePreview = ({ entry }) => (
  <CatchError>
    <ContactPageTemplate {...entry.getIn(["data"]).toJS()} isPreview={true} />
  </CatchError>
)
