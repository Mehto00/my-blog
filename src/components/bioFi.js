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


const BioFi = () => {
  const data = useStaticQuery(graphql`
    query BioFiQuery {
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
      <img src={meika} alt={author} className={`${bioStyles.avatar} ${bioStyles.avatarFi}`} />
      <div>
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
        <br />
        <br />
        <span style={{ display: "block", paddingRight: "5rem" }}>
          Tarkempia tietoja työurastani <em>Curriculum vitae</em> :n muodossa voit lukea {" "}
          <a href={`https://linkedin.com/in/${social.linkedin}`} target="_blank" rel="noopener noreferrer">Linkedin</a>{" "}
          profiilistani.
          <br />Koodipuolen jutut löytyvät puolestaan <a href={`https://github.com/${social.github}`} target="_blank" rel="noopener noreferrer">GitHubista</a>.
        </span>
      </p>
    </div>
    </div>
  )
}

export default BioFi
