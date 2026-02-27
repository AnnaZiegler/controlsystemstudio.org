import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import Banner from "../components/banner"
import UpcomingEvents from "../components/UpcomingEvents"

const About = () => {
  const images = useStaticQuery(graphql`{
  banner: file(
    relativePath: {eq: "banners/CS-Studio-Keyvisual_banner_5_darker.png"}
  ) {
    childImageSharp {
      gatsbyImageData(quality: 100, layout: FULL_WIDTH)
    }
  }
}`)
  return (
    <Layout>
      <SEO title="Contribute" />
      <Banner imageFluid={images.banner.childImageSharp.gatsbyImageData} text="Contribute" />
      <Container>
          Phoebus & CS-Studio development is entirely hosted on GitHub if you want to participate you will need a GitHub account.

        <h2 style={{ marginTop: `2rem` }}>CS-Studio Phoebus</h2>
        <ul>
          <li>
            The most complete documentation for developers, including build information 
            and instructions for setting up various IDE's for the development of Phoebus, is the{" "}
            <a
              href="https://control-system-studio.readthedocs.io/en/latest/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Guidebook
            </a>
            .
          </li>
          <li>
            The source code is located in the{" "}
            <a
              href="https://github.com/ControlSystemStudio/phoebus"
              target="_blank"
              rel="noopener noreferrer"
            >
              Phoebus GitHub repository
            </a>
            .
          </li>
        </ul>
        
        <h2>CS-Studio Eclipse</h2>
        <ul>
          <li>
            The most complete documentation for developers, including how to
            import into Eclipse and build CS-Studio, is the{" "}
            <a
              href="http://cs-studio.sourceforge.net/docbook/pt01.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Guide
            </a>
            .
          </li>
          <li>
            The source code is located in the{" "}
            <a
              href="https://github.com/ControlSystemStudio/cs-studio"
              target="_blank"
              rel="noopener noreferrer"
            >
              CS-Studio GitHub repository
            </a>
            .
          </li>
        </ul>

        <h2>Fork us on GitHub</h2>

        <p>
          All contributions are accepted as Pull Requests on{" "}
          <a
            href="https://github.com/ControlSystemStudio"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>
        <h2>Upcoming Events</h2>
        <UpcomingEvents />
        <div style={{ marginBottom: `1rem` }}></div>
        <h2>Attend Regular Meetings</h2>
        <ul>
          <li>
            We use Google Hangouts to share our progress and discuss issues.
          </li>
          <li>Meetings are posted there, visible after being added to the group.</li>
          <li>
            Minutes are posted to{" "}
            <a
              href="https://drive.google.com/folderview?id=0B_ikNAN_jxjPWmF6b3plYV8zbWM&amp;usp=sharing_eid&amp;tid=0Bxrrhhn0aTLWNS0teDEtNzRkVnc"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Docs
            </a>
            .
          </li>
          <li>Monthly Meeting on the first Wednesday of the month (9am EST).</li>
          <li>Project groups meet once a week when actively developing.</li>
        </ul>
        <h2>Reporting Problems</h2>
        <p>
          When in doubt or if you have a question, you can{" "}
          <a
            href="https://github.com/ControlSystemStudio/phoebus/issues"
            target="_blank"
            rel="noopener noreferrer"
          >
            create an issue
          </a>
          .
        </p>
        <h2>Development Guidelines</h2>
        <ul>
          <li>
            For the code conventions we are using {" "}
            <a
              href="https://github.com/ControlSystemStudio/cs-studio/wiki/CodingGuidelines"
              target="_blank"
              rel="noopener noreferrer"
            >
              Coding Guidelines
            </a>
            .
          </li>
          <li>
            For the Git workflow, see{" "}
            <a
              href="https://github.com/ControlSystemStudio/cs-studio/wiki/DevelopmentGuidelines"
              target="_blank"
              rel="noopener noreferrer"
            >
              Development Guidelines
            </a>
            .
          </li>
        </ul>
        <h2>Contribute a patch</h2>
        <ul>
          <li>
            When starting with a new patch, make sure to open an issue corresponding to the work you are about to do. This helps keep track of new developments.
          </li>
          <li>
            Create a branch starting from one of the active branches and develop on the new branch.
          </li>
          <li>
            <a
              href="https://github.com/ControlSystemStudio/phoebus/pulls"
              target="_blank"
              rel="noopener noreferrer"
            >
              Submit a pull request
            </a>
            .
          </li>
          <li>
            There should be some discussion and we will help you to get your patch merged.
          </li>
        </ul>
        <h2>New Plug-ins</h2>
        <p>
          Plug-ins may be part of 'core', 'applications', or a site's specific product.
          If you are unsure where to place your new plugin, feel free to ask.
          Typically, new plugins are added to a feature, in order to be added to a product.
        </p>
        <p>
          Use the Bundle-Vendor property of the manifest file of each plug-in (also visible in Eclipse in Overview/General Information/Provider)
          to record the author/maintainer in the following form:
        </p>
        <p>
          <code>{`Name Surname <email>[[Name Surname <email>|,]] - Site`}</code>
        </p>
        <p>
          Example:
          <code>
            {`Gabriele Carcassi <carcassi@bnl.gov>, Kunal Shroff <kshroff@bnl.gov> - Brookhaven National Lab`}
          </code>
        </p>
      </Container>
    </Layout>
  );
}

export default About
