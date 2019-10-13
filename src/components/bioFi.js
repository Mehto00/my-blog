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
      avatar: file(absolutePath: { regex: "/meika.jpg/" }) {
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
        position: `relative`,
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
          bottom: `-45px`,
          right: `-65px`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        Moi! Minä olen <strong>Mikko</strong>, Helsingissä asuva koodari.
        <br />
        <br />
        Ennen uraa ohjelmistokehittäjänä tein töitä markkinoinnin parissa
        graafisena suunnittelijana. Tuolloin pääsin työskentelemään myös paljon
        ohjelmistokehittäjien kanssa ja lopulta halusin myös itse tulla
        koodariksi. Vuoden 2017 alusta jättäydyin opintovapaille ja päätin oppia
        koodaamaan. Valmistuin vuonna 2018 Haaga-Heliasta ja aloin ansaita
        elantoni ohjelmistokehittäjänä.
        <br />
        <br />
        Tänä päivänä työskentelen Frond Endin parissa avainsanoina teknologiat
        kuten React, Redux, Gatsby and GraphQL.
        {` `}
        <br />
        <br />
        <span style={{ display: "block", paddingRight: "5rem" }}>
          Tarkempia tietoja työurastani <em>Curriculum vitae</em> :n muodossa voit lukea {" "}
          <a href={`https://linkedin.com/in/${social.linkedin}`}>Linkedin</a>{" "}
          profiilistani. 
        </span>
      </p>
    </div>
  )
}

export default BioFi
