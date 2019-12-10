import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
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
  DropdownItem,
} from "reactstrap"
// import { Link } from 'gatsby'
import { StaticQuery, graphql } from "gatsby"

export const Navigation = () => {

  const [isOpen, setIsOpen]            = useState(false)
  const [hoverMenu, updateHover]       = useState(false)
  const [visible, updateVisible]       = useState(true)
  const [atTop, updateAtTop]           = useState(true)
  const [currentTop, updateCurrentTop] = useState(0)
  const [scrollPos, updateScrollPos]   = useState(0)
  
  const toggle = () => setIsOpen(!isOpen)

  const openMenu = () => {
    updateHover(true)
  }
  const closeMenu = () => {
    updateHover(false)
  }

  useEffect(() => {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if(
        currentTop > 200 ||
        currentTop < 200        
      ) {
        updateCurrentTop(window.scrollY)
      }
      
      if (isTop !== atTop) {
          updateAtTop(isTop)
      }
      
      updateScrollPos(document.body.getBoundingClientRect().top)
      updateVisible(document.body.getBoundingClientRect().top > scrollPos)

    });
  })

  return (
    <StaticQuery
      query={graphql`
        query NavigationQuery {
          site {
            siteMetadata {
              title
            }
          }
          sitePage(path: { eq: "/navigation/" }) {
            context {
              frontmatter {
                menu_nav {
                  text
                  url
                }
                dropdowns {
                  dropdown_title
                  dropdown_items {
                    text
                    url
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const { title } = data.site.siteMetadata
        const { menu_nav, dropdowns } = data.sitePage.context.frontmatter
        const navColor = atTop 
        ? 'header header--light header--no-bg text-white' 
        : 'white-navheader header--light text-black'
        const navHidden = visible ? '' : 'hidden' 
        return (
          <Navbar style={{ transition: '1s' }} fixed="top" className={`${navColor} ${navHidden}`} expand="md"
            >
            <NavbarBrand className="nav-brand" href="/">
              {data.site.siteMetadata.title}
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                {menu_nav.map(item => (
                  <NavItem>
                    <NavLink className={ atTop 
                      ? 'text-white' 
                      : 'text-black' 
                    } href={item.url}>
                      {item.text}
                    </NavLink>
                  </NavItem>
                ))}
                {dropdowns.map(dropdown => {
                  return (
                    <Dropdown
                    isOpen={hoverMenu}
                    toggle={toggle}
                    onMouseOut={closeMenu}
                    onMouseOver={openMenu}
                    nav
                    inNavbar
                  >
                    <DropdownToggle nav caret color="white">
                      {dropdown.dropdown_title}
                    </DropdownToggle>
                    <DropdownMenu right>
                      {dropdown.dropdown_items.map(items => {
                        return (
                          <>
                            <DropdownItem className="nav-item">
                              <NavLink 
                              className={ atTop 
                                ? 'text-white' 
                                : 'text-black' 
                              }
                              href={items.url}>
                                  {items.title}
                              </NavLink>
                            </DropdownItem>
                            <DropdownItem divider />
                          </>
                        )
                      })}
                    </DropdownMenu>
                  </Dropdown>
                  )
                })}
              </Nav>
            </Collapse>
          </Navbar>
        )
      }}
    />
  )
}

Navigation.propTypes = {
  auth: PropTypes.bool.isRequired,
}
