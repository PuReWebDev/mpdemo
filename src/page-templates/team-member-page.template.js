import React from "react"

import { SEO } from "../components"
//import { RenderMarkdown } from "../core"
import {
  safelyGetFrontMatter,
} from "../cms"
import { Row } from "reactstrap"
import { Fade } from 'react-reveal'
import { TeamMemberPanel } from '../components/page-components/team/team-member-panel'
import env from '../const'

export const TeamMemberPageTemplate = props => {
  /**
   * Return header with dynamic text
   * @return {JSX}
   */
  const renderHeader = () => {
      return (
        <div className="image-text-container">
        <img className="grayscale" src="https://www.matrixpartners.com/wp-content/uploads/2017/11/contact-header-compressed.jpg" />
        <div className="image-text-centered">
        <h1 style={{ opacity: 1, color: "white" }}>{props.title}</h1>
            <p>{props.sub_title}</p>
        </div>
        </div>
      )
  }

  const renderTeamMembers = member => {
    return member.map(m => {
      return(
        <>
        <img src={`${m.team_member_image}`} />
        <p>{m.team_member_name}</p>
        </>
      )
      
    })
  }

  const renderTeamPanel = () => {
    const { team } = props
    return team.map(t => {
      return <TeamMemberPanel member={t} />
    })
  }

  return (
    <article>
      <SEO title="Team Member { Name }" />
    </article>
  )
}

const TeamMemberPage = props => {
  return (
    <TeamMemberPageTemplate
      {...safelyGetFrontMatter(props.pageContext)}
      isPreview={false}
    />
  )
}

export default TeamMemberPage
