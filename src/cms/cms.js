import CMS from "netlify-cms-app"

import {
  HomePagePreview,
  DefaultPagePreview,
  PortfolioPagePreview,
  AboutPagePreview,
  ContactPagePreview,
  TeamPagePreview
} from "./preview-templates"
import { ctaEditorConfig } from "./editor-components"
import netlifyIdentity from "netlify-identity-widget"
import GoTrue from "gotrue-js"

// Not reliably loaded by registerPreviewStyle, so import directly
import "../css/app.css"
import "../css/matrix.css"
import "../css/common.css"
import "../css/ported.css"

import "bootstrap/dist/css/bootstrap.min.css"
window.___loader = { enqueue: () => {}, hovering: () => {} }
// Add Previews
CMS.registerPreviewTemplate("home", HomePagePreview)
CMS.registerPreviewTemplate("content", DefaultPagePreview)
CMS.registerPreviewTemplate("portfolio", PortfolioPagePreview)
CMS.registerPreviewTemplate("about", AboutPagePreview)
CMS.registerPreviewTemplate("contact", ContactPagePreview)
CMS.registerPreviewTemplate("team", TeamPagePreview)


// Extend editor
CMS.registerEditorComponent(ctaEditorConfig)
