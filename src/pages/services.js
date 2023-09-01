import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import Banner from "../components/banner"

const About = () => {
  const images = useStaticQuery(graphql`{
  banner: file(
    relativePath: {eq: "banners/CS-Studio-Keyvisual_banner_4_darker.png"}
  ) {
    childImageSharp {
      gatsbyImageData(quality: 100, layout: FULL_WIDTH)
    }
  }
  logBook: file(relativePath: {eq: "logBook.png"}) {
    childImageSharp {
      gatsbyImageData(width: 487, layout: CONSTRAINED)
    }
  }
  alarmLog: file(relativePath: {eq: "alarmLog.png"}) {
    childImageSharp {
      gatsbyImageData(width: 487, layout: CONSTRAINED)
    }
  }
  alarmTable: file(relativePath: {eq: "alarmTable.png"}) {
    childImageSharp {
      gatsbyImageData(width: 487, layout: CONSTRAINED)
    }
  }
  channelFinder: file(relativePath: {eq: "channelTable.png"}) {
    childImageSharp {
      gatsbyImageData(width: 487, layout: CONSTRAINED)
    }
  }
  saveAndRestore: file(relativePath: {eq: "saveAndRestore.png"}) {
    childImageSharp {
      gatsbyImageData(width: 487, layout: CONSTRAINED)
    }
  }
}`)

  return (
    <Layout>
      <SEO title="Services" />
      <Banner
        imageFluid={images.banner.childImageSharp.gatsbyImageData}
        text="Services"
      />
      <Container style={{ marginTop: `2rem` }}>
        {/** Logbook **/}
        <div style={{ marginBottom: `3rem` }}></div>
        <h2>Logbook</h2>
        <p>
          The Data Browser, Display Builder, and other tools can be integrated with 
          the logbook clients to make rich log entries. Each application can configure the
          data that is automatically included in the log entry.
        </p>

        <p>
          The pluggable framework for Phoebus and CS-Studio allows applications to 
          create log entires to different implementations of logbook services. Currently, 
          there is support for Olog, Olog-ES, ELOG, and SNS operations logbook.
        </p>
        <GatsbyImage
          image={images.logBook.childImageSharp.gatsbyImageData}
          style={{ maxWidth: 437 }}
        />

        {/** Alarm Services **/}
        <div style={{ marginBottom: `3rem` }}></div>
        <h2>Alarm Table</h2>
        <p>
          Alarm Table info to be completed. 
        </p>
        <GatsbyImage
          image={images.alarmTable.childImageSharp.gatsbyImageData}
          style={{ maxWidth: 437 }}
        />
        <div style={{ marginBottom: `3rem` }}></div>
        <h2>Alarm Log</h2>
        <p>
          Alarm Log info to be completed.
        </p>
        <GatsbyImage
          image={images.alarmLog.childImageSharp.gatsbyImageData}
          style={{ maxWidth: 437 }}
        />
        <div style={{ marginBottom: `3rem` }}></div>
        <h2>Save & Restore</h2>
        <p>
          Info on Save&Restore to be completed.
        </p>
        <GatsbyImage
          image={images.saveAndRestore.childImageSharp.gatsbyImageData}
          style={{ maxWidth: 437 }}
        />
        <div style={{ marginBottom: `3rem` }}></div>
        <h2>Channel Finder</h2>
        <p>
          Info on Channel Finder to be completed.
        </p>
        <GatsbyImage
          image={images.alarmLog.childImageSharp.gatsbyImageData}
          style={{ maxWidth: 437 }}
        />
        <div style={{ marginBottom: `3rem` }}></div>
        <h2>Scan Client</h2>
        <p>
          The scan system can automate experiments. For example, it can move a
          motor from some start position to an end position in certain steps,
          waiting at each step until experiment data has been taken. A scan can
          consist of several nested loops. For example, at each step of moving
          the "horizontal" position of a sample, an inner loop can vary the
          "vertical" position of the sample to perform a 2-dimensional scan of
          the sample surface. As another example, an outer loop may vary the
          sample temperature while inner loops vary the sample position.
        </p>
        <p>
          <a href="http://htmlpreview.github.io/?https://github.com/ControlSystemStudio/cs-studio/blob/master/applications/scan/scan-plugins/org.csstudio.scan.ui/doc/scansystem.html">
            Read more
          </a>
        </p>
        
      </Container>
    </Layout>
  );
}

export default About
