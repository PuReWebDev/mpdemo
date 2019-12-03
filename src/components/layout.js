import { rhythm, scale } from "../utils/typography"
import { Navigation } from "./navigation"
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Container } from "reactstrap"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header

    console.log(this.props, "this layout props")
    if (location.pathname === rootPath || location.pathname === blogPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={location.pathname === blogPath ? `/blog/` : `/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/blog/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <Wrapper>
        <Container fluid style={{ padding: 0 }}>
          <header>{header}</header>
          <main>
            <Navigation auth={false} />
            {children}
          </main>
          <Footer>
            © {new Date().getFullYear()}
            {` `}
            <a href="http://www.matrixpartners.com.cn/">
              MATRIX PARTNERS CHINA
            </a>
            | <a href="http://www.matrixpartners.in/">MATRIX PARTNERS INDIA</a>
          </Footer>
        </Container>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100%;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
