import React from "react"

export const TeamMember = ({ img, name, position }) => {
  return (
    <div style={{ backgroundImage: `url(${img})` }} className="team-member">
      <h5>{name}</h5>
      <span>{position}</span>
    </div>
  )
}
