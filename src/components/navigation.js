import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
 // import { Link } from 'gatsby'
import { StaticQuery, graphql } from "gatsby"

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoverMenu, updateHover] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const openMenu = () => {updateHover(true)}
  const closeMenu = () => {updateHover(false)}

  return(<StaticQuery
  query={graphql`
  query NavigationQuery {
  site {
    siteMetadata {
      title
    }
  }
  sitePage(path: { eq: "/config/" }) {
    context {
      frontmatter {
        menu_nav {
          text
          url
        }
      }
    }
  }
}
`} 
render={data => {
  console.log("data" , data)
  //const { title } = data.site.siteMetaData
  const { title } = data.site.siteMetadata
  return (
        <Navbar style={ { padding: "0 60px" } } fixed="top" color="transparent" dark expand="md">
        <NavbarBrand className="nav-brand" href="/">{title}</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="/about" className="nav-item">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-item" href="/portfolio/">Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-item" href="/team/">Team</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-item" href="https://viewpoints.matrixpartners.com/">Viewpoints</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-item" href="/team/">Team</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-item" href="/contact/">Contact</NavLink>
            </NavItem>
            <Dropdown
             isOpen={hoverMenu}
             toggle={toggle}
             onMouseOut={closeMenu}
             onMouseOver={openMenu}
             nav inNavbar>
              <DropdownToggle nav caret>
                International
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Matrix China
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Matrix India
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Nav>
        </Collapse>
  </Navbar>)}} />)
}

Navigation.propTypes = {
  auth: PropTypes.bool.isRequired
}
