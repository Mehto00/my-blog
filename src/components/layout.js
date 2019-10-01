import React from "react"
import { Link } from "gatsby"

import Bio from "../components/bio"
import BioFi from "../components/bioFi"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const fiPath = `${__PATH_PREFIX__}/tags/fi/`
    const enPath = `${__PATH_PREFIX__}/tags/en/`
    let header

    if (
      location.pathname === rootPath ||
      location.pathname === fiPath ||
      location.pathname === enPath
    ) {
      header = (
        <h1
          style={{
            ...scale(1.1),
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
            to={`/`}
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
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <div style={{textAlign: "center", marginBottom: "1rem"}}>
          <Link style={{boxShadow:"none", fontSize:"1.1rem"}} to={"/tags/en/"}>🇬🇧 English</Link>
          <span style={{margin: "0 20px", fontSize: "1.2rem"}}><strong>/</strong></span>
          <Link style={{boxShadow:"none", fontSize:"1.1rem"}} to={"/tags/fi/"}>🇫🇮 Suomeksi</Link>
        </div>
        <SEO title="All posts" />
        {(location.pathname === rootPath || location.pathname === enPath) ? <Bio /> : ""}
        {(location.pathname === fiPath) ? <BioFi /> : ""}
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
