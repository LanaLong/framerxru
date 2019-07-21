import React from "react"
// import { graphql, StaticQuery, Link } from "gatsby"
import { Link } from "gatsby"
import styled from "styled-components"

// import Layout from "../components/layout"
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  height: 50vh;
  width: 50vw;
  background-color: rgba(46, 253, 25, 0.3);
  ${"" /* background-color: green; */}
  margin: 15vh 15vw;
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
      <span>QM</span>
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
