import React from "react"
import { Link } from "gatsby"

import Bio from "../components/bio"
import BioFi from "../components/bioFi"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

import layoutStyles from './layout.module.css'

class Layout extends React.Component {
  render() {
    const { location, title, subtitle, children } = this.props
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
        <h1 className={layoutStyles.heading1} >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
            <span className={layoutStyles.subTitle}>{subtitle}</span>
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3 className={layoutStyles.heading3}>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
            <span className={layoutStyles.subTitle3}>{subtitle}</span>
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
          padding: `0 ${rhythm(3 / 4)} 4rem`,
        }}
      >
        <header>{header}</header>
        <div className={layoutStyles.languages}>
          <Link style={{boxShadow:"none", fontSize:"1.1rem"}} to={"/tags/en/"}><span role="img" aria-label="Flag of England">🇬🇧</span> English</Link>
          <span style={{margin: "0 20px", fontSize: "1.2rem"}}><strong>/</strong></span> 
          <Link style={{boxShadow:"none", fontSize:"1.1rem"}} to={"/tags/fi/"}><span role="img" aria-label="Flag of Finland">🇫🇮</span> Suomeksi</Link>
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
