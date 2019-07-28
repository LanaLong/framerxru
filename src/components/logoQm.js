import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const logoQm = () => {
  const data = useStaticQuery(graphql`
    query {
      logoQm: file(relativePath: { eq: "logo-qm.png" }) {
        childImageSharp {
          fixed(width: 88) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <div>
      <Img fixed={data.logoQm.childImageSharp.fixed} />
    </div>
  )
}

export default logoQm
