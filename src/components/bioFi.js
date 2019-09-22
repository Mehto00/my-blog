/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const BioFi = () => {
  const data = useStaticQuery(graphql`
    query BioFiQuery {
      avatar: file(absolutePath: { regex: "/meika.png/" }) {
        childImageSharp {
          fixed(width: 180, height: 180) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
            linkedin
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
        backgroundColor: `#eee`,
        padding: `2rem 4rem 2rem 2rem`,
        position: `relative`
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
          position: `absolute`,
          bottom:`-45px`,
          right:`-65px`
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        Moi! Minä olen <strong>Mikko</strong> ja olen ammatiltani koodari. Asun Helsingissä.
        <br />
        <br />
        Before coding I was a graphic designer. Back then I used to work a lot
        with developers and after a while wanted to become a coder myself. So
        off I went back to school and learned how to code. After graduating at 2018 I
        started earning my living as a developer.
        <br />
        <br />
        Nowdays I do mostly all things frond end with frameworks, technologies
        and thingies like React, Redux, Gatsby and GraphQL.
        {` `}
        <br/>
        <br/>
        <span style={{display: "block", paddingRight: "5rem"}}>
        For more <em>Curriculum vitae</em> :ish information check out my{" "}
        <a href={`https://linkedin.com/in/${social.linkedin}`}>Linkedin</a>{" "}
        profile
        </span>
      </p>
    </div>
  )
}

export default BioFi
