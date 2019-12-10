import React, { useState } from "react"
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
 import { Link } from 'gatsby'
import { StaticQuery, graphql } from "gatsby"

export const Footer = () => {

  return (
    <StaticQuery
      query={graphql`
        query FooterQuery {
          site {
            siteMetadata {
              title
            }
          }
          sitePage(path: { eq: "/navigation/" }) {
            context {
              frontmatter {
                footer_nav_left {
                    text
                    url
                }
                footer_nav_right {
                    download
                    text
                    url
                }
              }
            }
          }
        }
      `}
      render={data => {
        const { 
            footer_nav_left,
            footer_nav_right
          } = data.sitePage.context.frontmatter
        return (
        <div className="footer-container">
          <div className="menu-footer-links-left-container">
            <ul classNAme="menu-footer-links-left">
            {footer_nav_left.map(nav_left => {
                return (
                <a
                    className="menu-item menu-item-type-custom menu-item-object-custom"                
                    href={nav_left.url}
                >
                    {nav_left.text}
                </a>
                )
            })}
            </ul>
          </div>
          <div className="menu-footer-links-right">
            {footer_nav_right.map(nav_right => {
                return (
                <a 
                    href={nav_right.download !== null 
                        ? (nav_right.download) 
                        : (nav_right.url)} className="footer-link"
                >
                    {nav_right.text}
                </a>
                )
            })}
            </div>
        </div>
        )
      }}
    />
  )
}

Footer.propTypes = {
  auth: PropTypes.bool.isRequired,
}

/**
 * TODO
 * 
 *   constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true
    };
  }

  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };
 */
