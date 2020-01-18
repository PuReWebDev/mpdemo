import React from 'react'
import { Row, Col } from 'reactstrap'

export const TeamMemberPanel = (member) => {
    
    function renderTeamMemberCards(teammate) {

        return teammate.map(team => {
            return (
            <Col xs={12} sm={3} md={3} lg={3} > 
                <div className="team-member-card">
                     <img 
                        alt={`team member ${team.team_member_name} profile picture`}
                        src={team.team_member_image} 
                    />
                     <p>{team.team_member_name}</p>
                </div>
            </Col>
            )
        })
    }


    return (
        <>
            <h3>{member.group}</h3>
            <Row className="team-member-row">
                {renderTeamMemberCards(member.member)}
            </Row>
        </>
    )
}