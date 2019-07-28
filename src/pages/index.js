import React from "react"
// import { graphql, StaticQuery, Link } from "gatsby"
import { Link } from "gatsby"
import styled from "styled-components"

import Logo from "../images/logo-qm.png"
import SEO from "../components/seo"

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${"" /* background-color: rgba(46, 253, 25, 0.3); */}
  text-align: center;
`
const Title = styled.h1`
  ${"" /* margin: 0 auto;
  text-align: center; */}
`

const LogoBlock = styled.img`
  display: block;
  margin: 0 auto;
`

const Subscription = styled.span``

const IndexPage = () => (
  //   <Layout>
  <>
    <SEO title="QM::Experience" />
    <Container>
      <LogoBlock src={Logo} alt="QM::Experience" />
      <Subscription>QM::Experience</Subscription>
      <Title>
        Наблюдение
        <br />
        за
        <span> временем</span>
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
