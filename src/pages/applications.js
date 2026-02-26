import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from 'styled-components'

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
    relativePath: {eq: "banners/CS-Studio-Keyvisual_banner_4_darker.png"}
  ) {
    childImageSharp {
      gatsbyImageData(quality: 100, layout: FULL_WIDTH)
    }
  }
  scan: file(relativePath: {eq: "scan-editor.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  displayBuilderEditor: file(relativePath: {eq: "displayBuilderEditor.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  channelTable: file(relativePath: {eq: "channelTable.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  alarmLog: file(relativePath: {eq: "alarmLog.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  alarmTable: file(relativePath: {eq: "alarmTable.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  saveAndRestore: file(relativePath: {eq: "saveAndRestore.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  databrowser: file(relativePath: {eq: "dataBrowser.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  logBook: file(relativePath: {eq: "logBook.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  probe: file(relativePath: {eq: "probe.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
}`)

  return (
    <Layout>
      <SEO title="Applications" />
      <Banner
        imageFluid={images.banner.childImageSharp.gatsbyImageData}
        text="Applications"
      />
      <Container style={{ marginTop: `2rem` }}>
        <h2>Display Builder</h2>
        <p>
          Display Builder is an <Highlight>operator interface panel builder</Highlight> for CS-Studio Phoebus.
          Driven by changes in computer graphics technology and trends, EPICS operator interface tools
          tend to undergo fundamental transformations every 10 years, recently accelerating.
          <Highlight> The Display Builder aims to minimize these transitions. </Highlight>It is in large parts backwards
          compatible with the original CS-Studio <code>BOY</code> tool and there are converter tools available for EDM and MEDM displays.
        </p>
        <p>Key features include:</p>
        <ul>
          <li>
            <Highlight>Heavy use of threading. </Highlight>Display files are loaded in background threads,
            related displays are loaded in parallel, plot images are prepared in separate threads,
            scripts are executed off the users interface thread.
          </li>
          <li>
            <Highlight>Large number of single-purpose widgets. </Highlight>
            Widgets with specific purposes are more obvious,
            not only to the end user but also to tools which translate between display file formats.
            Exmaple widgets are an <code>Ellipse</code> for static graphics, a <code>LED</code> that changes between on/off
            states based on a PV, and a <code>Multi State LED</code> that changes between more than two PV states.
          </li>
          <li>
            <Highlight>EPICS Support.</Highlight> The PV layer supports EPICS Channel Access, PV Access, local PVs,
            simulated PVs, but also other protocols like MQTT. The data flow is
            controlled using the Reactive Extensions for Java.
          </li>
          <li>
            <Highlight>Modularization. </Highlight>Model, Representation, Runtime and Editor are strictly separate
            modules, allowing each to evolve separately.
          </li>
          <li>
            <Highlight>The Representation is based on JavaFX</Highlight>, the most modern Java GUI
            library, but as mentioned the representation is fundamentally separate from the model and runtime.
            In principle, we could replace the graphics library, and a proof-of-concept had indeed been
            implemented based on SWT.
          </li>
        </ul>
        <GatsbyImage
          image={images.displayBuilderEditor.childImageSharp.gatsbyImageData}
          style={{ maxWidth: `100%` }}
        />
        <hr />
        <p>The Display Builder file format is saved with the <code>.bob</code> extension and is "compact XML" similar to this:</p>
        <pre>
          <code>
          {`
            <widget type="label">
            <x>100</x>
            <y>200</y>
            <text>Hello</text>
            <widget>
          `}
          </code>
        </pre>
        <p>
          These XML files can be read and written by many tools, simplifying the programmatic generation of displays.
          The minimal nature without any direct references to the display builder will simplify future
          moves to the next greatest EPICS display tool.
        </p>
        <p>
          A purely web based tool called <Highlight>Display Builder Web Runtime </Highlight>
          (<a href="https://github.com/ornl-epics/dbwr" target="_blank">DBWR</a>)
          utilizes the same XML format and is available for viewing Display Builder files in a web browser.
          This allows CS-Studio Phoebus screens to be viewed within the application
          and on a web browser without any changes to the underlying .bob file.
        </p>

        {/** Alarm Applications **/}
        <div style={{ marginBottom: `3rem` }}></div>
        <h2>Alarm Table</h2>
        <p>
          The Alarm Table application displays the <Highlight>current state of alarms</Highlight> in the control system.
          Its interface will show all current alarms and provide operators with helpful information on the meaning of
          each alarm and the required steps needed to address the issue.
          Alarms can be <Highlight>acknowledged</Highlight>, moving them to a seperate table.
        </p>
        <GatsbyImage
          image={images.alarmTable.childImageSharp.gatsbyImageData}
          style={{ maxWidth: "100%" }}
        />
        <div style={{ marginBottom: `3rem` }}></div>
        <h2>Alarm Log</h2>
        <p>
          In order for the Alarm System to be effective and functional, proper configuration and periodic tuning is essential.
          Rather than displaying pending Alarms in the Alarm Table, the Alarm Log Table provides a list of <Highlight>past alarm events</Highlight>.
          The user interface allows users to effectively <Highlight>search, filter, and parse</Highlight> through the archived alarm messages
          which can help to better understand past events and better configure the Alarm Server for the future.
        </p>
        <GatsbyImage
          image={images.alarmLog.childImageSharp.gatsbyImageData}
          style={{ maxWidth: "100%" }}
        />
        {/** Channel Table */}
        <div style={{ marginBottom: `3rem` }}></div>
        <h2>Channel Table</h2>
        <p>
          The Channel Table application features a <Highlight>search box</Highlight> that queries
          the Control System Directory Service for a <Highlight>list of channels</Highlight> that match certain conditions,
          such as physical functionality or location.
          Queries will result in a <Highlight>list of PVs</Highlight> that match the filter along with various
          PV metadata including the IOC Name, Host Name, Record Type, Description, and PV Status.
          Channel Table also provides mechanisms to <Highlight>create new metadata</Highlight>, allowing for different
          perspectives of the same set of channel names.
        </p>
        <GatsbyImage
          image={images.channelTable.childImageSharp.gatsbyImageData}
          style={{ maxWidth: "100%" }}
        />
        <div style={{ marginBottom: `3rem` }}></div>
        <h2>Data Browser</h2>
        <p>
          The Data Browser is a trending tool for <Highlight>displaying both live and archived Control System data </Highlight>
          in a Strip-Chart type plot. Data Browser plots are saved as <code>.plt</code> files and contain
          the configuration of the specific plot so they can be easily reopened later and be integrated
          with Display Builder displays.
        </p>
        <p>
          The current data on the plot can either be captured in a <Highlight>snapshot image</Highlight> or
          <Highlight> exported directly into spreadsheet or Matlab formats</Highlight>.
          Users can annotate the plots to highlight important events and the snapshot images can be quickly attached to Logbook entries,
          emailed to other users, or saved locally.
        </p>
        <GatsbyImage
          image={images.databrowser.childImageSharp.gatsbyImageData}
          style={{ maxWidth: "100%" }}
        />
        {/** Logbook **/}
        <div style={{ marginBottom: `3rem` }}></div>
        <h2>Log Entry Table / Send to Logbook</h2>
        <p>
          CS-Studio Phoebus contains a <Highlight>pluggable framework</Highlight> which allows applications to create and view log entries
          to several different implementations of Logbook services including <Highlight>Olog, Olog-ES, ELOG, and SNS operations logbook</Highlight>.
        </p>

        <p>
          While <Highlight>displaying log entries</Highlight> and all attached files,
          the Log Entry Table also allows useres to <Highlight>search</Highlight> for specific log entries that match their filters.

          Other applications can integrate the Logbook by including a <Highlight>“Send to Logbook”</Highlight> button,
          allowing the user to quickly create a new entry.
          Through the log entry menu users may attach screenshots of the current CS-Studio window or Data Browser snapshot.
        </p>
        <GatsbyImage
          image={images.logBook.childImageSharp.gatsbyImageData}
          style={{ maxWidth: "100%" }}
        />
        {/** Probe */}
        <div style={{ marginBottom: `3rem` }}></div>
        <h2>Probe</h2>
        <p>
          The Probe tool allows users to <Highlight>quickly view</Highlight> the current value and status of a Control System Process Value.
          The current alarm state, last update timestamp, and any PV meta-data are shown.
          Users can also use Probe to <Highlight>update</Highlight> the value of the PV by clicking into the Value box and typing the new value.
        </p>
        <GatsbyImage
          image={images.probe.childImageSharp.gatsbyImageData}
          style={{ maxWidth: "100%" }}
        />
        {/** Save & Restore */}
        <div style={{ marginBottom: `3rem` }}></div>
        <h2>Save and Restore</h2>
        <p>
          The Save and Restore application is used to take a “snapshot” of a user-defined list of PV values,
          <Highlight> saving the configuration</Highlight> to a file, containing values of a subsystem that has been tuned to a wanted state.
          Snapshot data can be used to <Highlight>restore the PV values</Highlight> in order to put the subsystem back to the same state.
          In the client application users may modify values or exclude PVs prior to restore.
        </p>
        <p>
          Snapshots may also be combined to run a single restore operation, processing a larger set of PVs.
        </p>
        <GatsbyImage
          image={images.saveAndRestore.childImageSharp.gatsbyImageData}
          style={{ maxWidth: "100%" }}
        />
        {/** Scan */}
        <div style={{ marginBottom: `3rem` }}></div>
        <h2>Scan Editor / Scan Monitor</h2>
        <p>
          The Scan Editor application is the interface for <Highlight>creating the logic for a specific scan</Highlight>.
          It provides a drag and drop interface for adding commands such as conditional branches, wait calls, step loops, and calling scripts.
          Once the logic is completed and submitted, the scan is run on a central server.
        </p>
        <p>
          The Scan Monitor tool shows which scans are <Highlight>running</Highlight> and a <Highlight>history</Highlight> of completed scans.
        </p>
        <GatsbyImage
          image={images.scan.childImageSharp.gatsbyImageData}
          style={{ maxWidth: "100%" }}
        />
      </Container>
    </Layout>
  );
}

export default About
