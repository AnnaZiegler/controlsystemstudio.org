import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import Banner from "../components/banner"

const Highlight = styled.span`
  color: #00293f;
  font-weight: bold;
`

const About = () => {
  const images = useStaticQuery(graphql`{
  banner: file(
    relativePath: {eq: "banners/CS-Studio-Keyvisual_banner_8_darker.png"}
  ) {
    childImageSharp {
      gatsbyImageData(quality: 100, layout: FULL_WIDTH)
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
      <Container>
        {/** Alarm Services **/}
        <div style={{ marginBottom: `3rem` }}></div>
        <h2>Alarm Services</h2>
        <p>
          There are three services which combine to make up a complete solution for control system alarm handling.
        </p>
        <h3>Alarm Server</h3>
        <p>
          The core service is the <Highlight>Alarm Server</Highlight> which is based on <Highlight>Zookeeper</Highlight> and <Highlight>Kafka</Highlight>.
          The Alarm Server contains <Highlight>user-defined alarm configurations</Highlight> persistent in Zookeeper.
          These alarm configurations will list PVs of interest, organized in a tree hierarchy to arbitrary depth.
          These files also contain additional information needed by the <Highlight>Alarm Views</Highlight>,
          e.g. guidance texts or links to control displays. The Alarm Server will send real time
          messages to clients via Kafka data streams.
        </p>
        <h3>Alarm Logger</h3>
        <p>
          The second service is the <Highlight>Alarm Logger</Highlight> which is based on <Highlight>ElasticSearch </Highlight>
          and <Highlight>keeps an archive</Highlight> of all alarm messages and events which can be <Highlight>searched and filtered</Highlight> by clients.
          It is especially useful to discover alarm patterns, create statistical reports or debug the alarm system.

        </p>
        <p>
          <a href="https://control-system-studio.readthedocs.io/en/latest/services/alarm-logger/doc/index.html" target="_blank">
            Read more (Alarm Logging Service Documentation)
          </a>
        </p>
        <h3>Alarm Configuration Logger</h3>
        <p>
          The third service is the <Highlight>Alarm Configuration Logger</Highlight>, a simple service to <Highlight>log all changes </Highlight>
          made to the Alarm Server Configuration and <Highlight>version control</Highlight> them with a git repository.
          It will also map the Alarm Configuration Tree into a directory structure for a better overview.
        </p>
        <p>
          <a href="https://control-system-studio.readthedocs.io/en/latest/services/alarm-config-logger/doc/index.html" target="_blank">
            Read more (Alarm Configuration Logging Documentation)
          </a>
        </p>
        {/** Archiver Appliance **/}
        <div style={{ marginBottom: `3rem` }}></div>
        <h2>Archiver Appliance</h2>
        <p>
        The <Highlight>EPICS Archiver Appliance</Highlight> is an implementation of an archiver for EPICS control systems
        that aims to <Highlight>archive</Highlight> millions of PVs and is supported by CS-Studio for the Data Browser.
        Communication will make use of the <Highlight>PB/HTTP protocol</Highlight> and can be  configured accordingly.
        </p>
        <p>
          <a href="https://epicsarchiver.readthedocs.io/en/latest/" target="_blank">
            Read more (EPICS Archiver Appliance Documentation)
          </a>
        </p>
        {/** Channel Finder */}
        <div style={{ marginBottom: `3rem` }}></div>
        <h2>Channel Finder Service</h2>
        <p>
          The <Highlight>Channel Finder</Highlight> service is a simple directory service which gives clients the ability
          to <Highlight>search for channel names</Highlight> and associated meta-data with <Highlight>complex queries</Highlight>.
          Backed by <Highlight>ElasticSearch</Highlight>, the directory data consists of a set of channels
          with an arbitrary set of properties (name-value pairs), and an arbitrary set of tags (names).
          These channels can be then queried based on the channel name, property value and tags.
        </p>
        <p>
          <a href="https://channelfinder.readthedocs.io/en/latest/" target="_blank">
            Read more (Channel Finder Documentation)
          </a>
        </p>
        {/** Logbook Service**/}
        <div style={{ marginBottom: `3rem` }}></div>
        <h2>Logbook Service (Olog)</h2>
        <p>
          The Logbook Service <Highlight>Olog</Highlight> is an electronic logbook which allows
          for the <Highlight>creation</Highlight> and <Highlight>retrieval</Highlight> of log entries.
          The service was developed to address the needs of <Highlight>operators, engineers, and users</Highlight> of large scientific facilities.
          Since these log entries are stored in <Highlight>ElasticSearch</Highlight>, the service also supports a powerful search API.
          Search criteria can include log entry title and body and its meta-data (author, date, tags, properties).
        </p>
        <p>
          For basic formatting the log entry body is authored using <Highlight>Markdown</Highlight>, which is converted by clients to HTML.
        </p>
        <p>
          <Highlight>Attachments of any kind</Highlight> may be added to log entries which are presistently stored in <Highlight>MongoDB</Highlight> by the service.
          Additionally attachments can be searched by type and the clients will render thumbnail previews of attached image.
        </p>
        <p>
          <a href="https://olog.readthedocs.io/en/latest/" target="_blank">
            Read more (Olog Documentation)
          </a>
        </p>
        {/** Save & Restore */}
        <div style={{ marginBottom: `3rem` }}></div>
        <h2>Save and Restore Service</h2>
        <p>
          The <Highlight>Save-and-restore</Highlight> service implements service as a collection of <Highlight>REST endpoints</Highlight>.
          These can be used by clients to manage configurations (aka <Highlight>save sets</Highlight>) and <Highlight>snapshots</Highlight>,
          to compare snapshots and to restore PV values from snapshots. This service is based on the <Highlight>Spring Boot </Highlight>
          application using <Highlight>Elasticsearch</Highlight> for data persistence.
        </p>
        <p>
          <a href="https://control-system-studio.readthedocs.io/en/latest/services/save-and-restore/doc/index.html" target="_blank">
            Read more (Save-and-restore Documentation)
          </a>
        </p>
        {/** Scan */}
        <div style={{ marginBottom: `3rem` }}></div>
        <h2>Scan Server</h2>
        <p>
          The <Highlight>Scan system</Highlight> can automate experiments by <Highlight>running scans on a central server</Highlight>.
          Scans can be defined in a precise way, defining start and endpoint,
          the number of steps to take and can also be configured to wait for the experimental data to be recieved before proceeding.
        </p>
        <p>
          One scan can even consist of several nested loops, giving you the possibility to perform a 2-dimensional scan of a sample surface
          with nesting a "vertical position" loop inside every step of your "horizontal position" loop.
        </p>
        <p>
          Running the scripts on a central server can <Highlight>minimize conflicts or failure</Highlight>,
          while making logs and history easily accessible by system experts.
        </p>
        <p>
          <a href="http://htmlpreview.github.io/?https://github.com/ControlSystemStudio/cs-studio/blob/master/applications/scan/scan-plugins/org.csstudio.scan.ui/doc/scansystem.html" target="_blank">
            Read more (Scan system Documentation)
          </a>
        </p>
      </Container>
    </Layout>
  );
}

export default About
