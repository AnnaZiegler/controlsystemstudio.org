import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import Collaboration from "../components/collaboration"
import Banner from "../components/banner"

const Highlight = styled.span`
  color: #00293f;
  font-weight: bold;
`

const GreyBackground = styled.div`
  background-color: #f5f5f5;
`

const WhiteBackground = styled.div`
  background-color: #ffffff;
`

const ContentFlex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  & > * {
    flex: 1;
  }
  @media (max-width: 992px) {
    flex-direction: column;
    & > p {
      margin-right: 0px;
      margin-left: 0px;
    }
  }
`

const ContentFlexLeft = styled(ContentFlex)`
  & > p {
    margin-right: 3rem;
  }

  @media (max-width: 992px) {
    & > p {
      margin-right: 0px;
      margin-bottom: 1rem;
    }
`

const ContentFlexRight = styled(ContentFlex)`
  & > p {
    margin-left: 3rem;
  }

  @media (max-width: 992px) {
    & > p {
      margin-left: 0px;
      margin-top: 1rem;
    }
`

const ContentImage = styled.div`
  @media (max-width: 992px) {
    display: contents;
  }
`

const IndexPage = () => {
  const images = useStaticQuery(graphql`{
  banner: file(
    relativePath: {eq: "banners/CS-Studio-Keyvisual_banner_1_darker_v03.png"}
  ) {
    childImageSharp {
      gatsbyImageData(width: 3300, height: 400, quality: 100, layout: FULL_WIDTH)
    }
  }
  pvmg: file(relativePath: {eq: "Layer-Architecture-IOC-hosting-v20-5.png"}) {
    childImageSharp {
      gatsbyImageData(width: 700, layout: CONSTRAINED)
    }
  }
  ui: file(relativePath: {eq: "displayBuilderRuntime.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  databrowser: file(relativePath: {eq: "dataBrowser.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
}`)
  return (
    <Layout>
      <SEO title="" />
      <Banner
        imageFluid={images.banner.childImageSharp.gatsbyImageData}
        text="BRING YOUR CONTROL SYSTEM TO THE NEXT LEVEL"
      />
      <div>
        <Container style={{ marginTop: `2rem`, marginBottom: `2rem` }}>
          <h1>Control System Studio</h1>
          <p style={{ marginBottom: `0` }}>
            Control System Studio is a <Highlight>collection of tools and applications</Highlight> to
            <Highlight> monitor and operate </Highlight> large scale control systems, such as the ones in the accelerator community.
          </p>
          <p></p>
          <p>
            <Highlight>Phoebus</Highlight>, the current implementation of CS-Studio, is a pure <Highlight>java/javafx</Highlight> based implementation
            which uses features like <Highlight>SPI and modules</Highlight> to provide the same extensible and modular achitecture.
            The original implementation of CS-Studio is based on the <Highlight>Eclipse RCP framework </Highlight>
            which provided an extensible and pluggable architecture.
          </p>
          <p>
            The Phoebus and CS-Studio products are developed and maintained
            by a <Highlight>collaboration between many laboratories and universities</Highlight>.
        </p>
        </Container>
        <GreyBackground style={{ padding: `2rem 0` }}>
          <Container>
            <h2>
              <span
                style={{
                  lineHeight: `1.6`,
                  boxDecorationBreak: `clone`,
                  WebkitBoxDecorationBreak: `clone`,
                }}
              >
                EASILY INTEGRATES WITH YOUR CONTROL SYSTEM
              </span>
            </h2>
            <ContentFlexLeft>
              <p>
                With an <Highlight>extensible data connection layer</Highlight> it is possible
                to use Phoebus and CS-Studio with multiple control systems and data sources.
                Currently, the community supports the <Highlight>EPICS Channel Access </Highlight>
                and <Highlight>pvAccess</Highlight> protocols along with <Highlight>MQTT</Highlight>.
                The use of well defined SPI's allows for CS-Studio applications to be used with multiple site specific 
                services.
              </p>
              <ContentImage>
                <GatsbyImage
                  image={images.pvmg.childImageSharp.gatsbyImageData}
                  style={{ maxWidth: 437, width: `100%` }}
                />
              </ContentImage>
            </ContentFlexLeft>
          </Container>
        </GreyBackground>
        <WhiteBackground style={{ padding: `2rem 0` }}>
          <Container>
            <h2>
              <span
                style={{
                  lineHeight: `1.6`,
                  boxDecorationBreak: `clone`,
                  WebkitBoxDecorationBreak: `clone`,
                }}
              >
                QUALITY USER INTERFACES
              </span>
            </h2>
            <ContentFlexRight>
              <ContentImage>
                <GatsbyImage
                  image={images.ui.childImageSharp.gatsbyImageData}
                  style={{ maxWidth: 437, width: `100%` }}
                />
              </ContentImage>
              <p>
                A <Highlight>WYSIWYG editor</Highlight> makes it possible to develop production quality controls
                and monitoring user interfaces easily.
                The framework provides support for developing <Highlight>multi-threading applications </Highlight> 
                along with providing features like <Highlight>rate limiting and aggregation</Highlight>,
                ensuring performance and scalablity of user developed screens.
              </p>
            </ContentFlexRight>
          </Container>
        </WhiteBackground>
        <GreyBackground style={{ padding: `2rem 0`, marginBottom: `2rem` }}>
          <Container>
            <h2>
              <span
                style={{
                  lineHeight: `1.6`,
                  boxDecorationBreak: `clone`,
                  WebkitBoxDecorationBreak: `clone`,
                }}
              >
                THE POWERFUL DATABROWSER
              </span>
            </h2>
            <ContentFlexLeft>
              <p>
              The Databrowser is a <Highlight>trending tool</Highlight>.
              It <Highlight>aggregates live and archived data</Highlight> to plot values over a user-defined time range.
              Databrowser plots may be created from any OPI visual component associated with a <Highlight>Control System Process Value (PV). </Highlight>
              Additional features include extensive plot styling capabilities as well as <Highlight>import/export of data</Highlight> in several formats. 
              </p>
              <ContentImage>
                <GatsbyImage
                  image={images.databrowser.childImageSharp.gatsbyImageData}
                  style={{ maxWidth: 655, width: `100%` }}
                />
              </ContentImage>
            </ContentFlexLeft>
          </Container>
        </GreyBackground>
        <Container>
          <h2>Our Collaboration</h2>
          <div style={{ marginBottom: `2rem` }}>
            <Collaboration />
          </div>
        </Container>
      </div>
    </Layout>
  );
}

export default IndexPage
