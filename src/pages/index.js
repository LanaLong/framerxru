import React from "react"
// import { graphql, StaticQuery, Link } from "gatsby"
import { Link } from "gatsby"
import styled from "styled-components"

import Logo from "../images/logo-qm.svg"
import SEO from "../components/seo"

// const getMarckdownPosts = graphql`
//   {
//     allMarkdownRemark {
//       totalCount
//       edges {
//         node {
//           fields {
//             slug
//           }
//           id
//           frontmatter {
//             title
//             date
//           }
//           excerpt
//         }
//       }
//     }
//   }
// `

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  background-color: rgba(46, 253, 25, 0.3);
  text-align: center;
`
const Title = styled.h1`
  margin: 0 auto;
  text-align: center;
`

const IndexPage = () => (
  //   <Layout>
  <>
    <SEO title="QM::Experience" />
    <Container>
      <span>
        <img
          src={Logo}
          alt="QM::Experience"
          style={{
            width: "50 px",
            border: "3px solid grey",
          }}
        />
        QM
      </span>
      <Title>
        Наблюдение
        <br /> за <span>временем</span>
      </Title>
      <span>Date</span>
      <p>Quote</p>
      <h5>
        <Link to="/posts/">Все статьи</Link>
      </h5>
    </Container>
  </>
  //   </Layout>
)

export default IndexPage
