import React from "react"

import { SEO } from "../components"
//import { RenderMarkdown } from "../core"
import {
  safelyGetFrontMatter,
} from "../cms"
import { StaticQuery, graphql } from "gatsby"
import { Row } from "reactstrap"
import { Fade } from 'react-reveal'
import { TeamMemberPanel } from '../components/page-components/team/team-member-panel'
import env from '../const'

/**
 * 
 * 
   allSitePage {
    nodes {
      id
      path
      context {
        frontmatter {
          team_member_name
          team_member_image
        }
      }
    }
  }


 * @param {*} props 
 */
export const TeamPageTemplate = props => {

  /**
   * Return header with dynamic text
   * @return {JSX}
   */
  const renderHeader = () => {
      return (
        <div className="image-text-container">
        <img className="grayscale" src="https://www.matrixpartners.com/wp-content/uploads/2017/11/contact-header-compressed.jpg" />
        <div className="image-text-centered">
      <h1 style={{ opacity: 1, color: "white" }}>{' Team Page '}</h1>
            <p>{'team sub page'}</p>
        </div>
        </div>
      )
  }

  const renderTeamMembers = () => {
    /*
    return member.map(m => {
      return(
        <>
        <img src={`${m.team_member_image}`} />
        <p>{m.team_member_name}</p>
        </>
      )
      
    })*/
  }

  const renderTeamPanel = list => {
    const positionMap = [];
    const map = new Map();
    const members = list.allSitePage.nodes.filter(item => {
      return item.context !== null && item.context.frontmatter !== null && item.context.frontmatter.team_member_name !== null ? item.context.frontmatter : null
    })
    for (const item of members) {
      if(!map.has(item.context.frontmatter.team_position)){
        map.set(item.context.frontmatter.team_position, true);    // set any value to Map
        positionMap.push(item.context.frontmatter.team_position);
      }
    }
  
    const teamMap = []
    positionMap.map(pos => teamMap[pos] = [])
    members.forEach((item) => {
        teamMap[item.context.frontmatter.team_position].push(item.context.frontmatter)
    })
    
    return positionMap.map(t => {
      return <TeamMemberPanel member={teamMap[t]} group={t} />
    })
  }

  return (<StaticQuery
  query={graphql`query MyQuery {
    allSitePage {
      nodes {
        id
        path
        context {
          frontmatter {
            team_member_name
            team_member_image
            team_position
          }
        }
      }
    }
  }
  `}
  render={data => ( (
    <article>
      <SEO title="Team Page" />
      {renderHeader(data)}
      <div className="team-member-container">
      {renderTeamPanel(data)}
      </div>
    </article>
    ))} />)
}

const TeamPage = props => {
    return <TeamPageTemplate isPreview={false} />
}

export default TeamPage
