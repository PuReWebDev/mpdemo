import CMS from "netlify-cms-app"

import { HomePagePreview, DefaultPagePreview } from "./preview-templates"
import { ctaEditorConfig } from "./editor-components"
import netlifyIdentity from 'netlify-identity-widget'
import GoTrue from "gotrue-js";

// Not reliably loaded by registerPreviewStyle, so import directly
import "../css/app.css"
import "../css/matrix.css"
import 'bootstrap/dist/css/bootstrap.min.css'

// Add Previews
CMS.registerPreviewTemplate("home", HomePagePreview)
CMS.registerPreviewTemplate("content", DefaultPagePreview)

// Extend editor
CMS.registerEditorComponent(ctaEditorConfig)

console.log(CMS, "Looking intot he cms global")

