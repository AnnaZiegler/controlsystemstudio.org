import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import Collaboration from "../components/collaboration"
import Banner from "../components/banner"

const About = () => {
  const images = useStaticQuery(graphql`
    query {
      banner: file(
        relativePath: { eq: "banners/CS-Studio-Keyvisual_banner_2_darker.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 3300, maxHeight: 400, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="About" />
      <Banner imageFluid={images.banner.childImageSharp.fluid} text="About" />
      <Container>
        <p style={{ marginBottom: `0` }}>
          Control System Studio is a collection of tools and applications to monitor and operate 
          large scale control systems, such as the ones in the accelerator community.
        </p>
        <div style={{ marginTop: `3rem`, marginBottom: `3rem` }}>
          <h2>Contact</h2>
          <p>
            User Level Questions:{" "}
            <a
              href="http://www.aps.anl.gov/epics/tech-talk/"
              target="_blank"
              rel="noopener noreferrer"
            >EPICS Tech-Talk Mailing list</a>
          </p>
          <p>Developer Level Questions: <a
              href="mailto:cs-studio-core@lists.sourceforge.net"
            >cs-studio-core@lists.sourceforge.net</a></p>
          <p>Report Bugs/Problems: <a
              href="https://github.com/ControlSystemStudio/cs-studio/issues"
              target="_blank"
              rel="noopener noreferrer"
            >GitHub Issue Tracker</a></p>
          <Collaboration style={{ marginTop: `3rem` }}/>
        </div>
      </Container>
    </Layout>
  )
}

export default About
