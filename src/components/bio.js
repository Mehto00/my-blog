/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import meika from "../../static/meika.jpg"

import bioStyles from "./bio.module.css"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author
          social {
            twitter
            linkedin
            github
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      className={bioStyles.wrapper}>
      <img src={meika} alt={author} className={bioStyles.avatar} />
      <div>
      <p>
        Hi! I'm <strong>Mikko</strong> and I'm a developer. I live and work in Helsinki.
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
        <span className={bioStyles.indentParagraph}>
        For more <em>Curriculum vitae</em> :ish information check out my{" "}
        <a href={`https://linkedin.com/in/${social.linkedin}`}>Linkedin</a>{" "}
        profile. You can also find my coding profile from <a href={`https://github.com/${social.github}`} target="_blank">GitHub</a>.
        </span>
      </p>
      </div>
    </div>
  )
}

export default Bio
