import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from 'styled-components'
import Container from "./container"

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 10px;
`

const Collaboration = ({ style }) => {
  const images = useStaticQuery(graphql`{
  als: file(relativePath: {eq: "institutes/als.png"}) {
    childImageSharp {
      gatsbyImageData(width: 120, height: 99, quality: 80, layout: CONSTRAINED)
    }
  }
  anl: file(relativePath: {eq: "institutes/ANL-argonne.png"}) {
    childImageSharp {
      gatsbyImageData(width: 120, height: 99, quality: 80, layout: CONSTRAINED)
    }
  }
  brok: file(relativePath: {eq: "institutes/Brok_Logo_v01.png"}) {
    childImageSharp {
      gatsbyImageData(width: 99, height: 99, quality: 80, layout: CONSTRAINED)
    }
  }
  cea: file(relativePath: {eq: "institutes/CEA-IRFU.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 99, height: 99, quality: 80, layout: CONSTRAINED)
    }
  }
  cosylab: file(relativePath: {eq: "institutes/cosylab.png"}) {
    childImageSharp {
      gatsbyImageData(width: 99, height: 99, quality: 80, layout: CONSTRAINED)
    }
  }
  desy: file(relativePath: {eq: "institutes/desy_Logo_v01.png"}) {
    childImageSharp {
      gatsbyImageData(width: 99, height: 99, quality: 80, layout: CONSTRAINED)
    }
  }
  dls: file(relativePath: {eq: "institutes/diamond.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 99, height: 99, quality: 80, layout: CONSTRAINED)
    }
  }
  ess: file(relativePath: {eq: "institutes/ESS_logo.png"}) {
    childImageSharp {
      gatsbyImageData(width: 99, height: 99, quality: 80, layout: CONSTRAINED)
    }
  }
  fnal: file(relativePath: {eq: "institutes/FNAL-fermilab.png"}) {
    childImageSharp {
      gatsbyImageData(width: 99, height: 99, quality: 80, layout: CONSTRAINED)
    }
  }
  frib: file(relativePath: {eq: "institutes/FRIB_logo_v01.png"}) {
    childImageSharp {
      gatsbyImageData(width: 99, height: 99, quality: 80, layout: CONSTRAINED)
    }
  }
  hzb: file(relativePath: {eq: "institutes/hzb.png"}) {
    childImageSharp {
      gatsbyImageData(width: 99, height: 99, quality: 80, layout: CONSTRAINED)
    }
  }
  iter: file(relativePath: {eq: "institutes/iter_v01.png"}) {
    childImageSharp {
      gatsbyImageData(width: 99, height: 99, quality: 80, layout: CONSTRAINED)
    }
  }
  kit: file(relativePath: {eq: "institutes/KIT.png"}) {
    childImageSharp {
      gatsbyImageData(width: 99, height: 99, quality: 80, layout: CONSTRAINED)
    }
  }
  psi: file(relativePath: {eq: "institutes/PSI.png"}) {
    childImageSharp {
      gatsbyImageData(width: 99, height: 99, quality: 80, layout: CONSTRAINED)
    }
  }
  sns: file(
    relativePath: {eq: "institutes/Spallation_Neutron_Source_logo_v01.png"}
  ) {
    childImageSharp {
      gatsbyImageData(width: 99, height: 99, quality: 80, layout: CONSTRAINED)
    }
  }
}`)

  return (
    <Container>
      <Flex style={style}>
        <a
            href="https://als.lbl.gov/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to ALS Website"
        >
            <GatsbyImage
            image={images.als.childImageSharp.gatsbyImageData}
            style={{ minWidth: 99 }}
            alt="ALS Logo"
            />
        </a>
        <a
            href="https://www.anl.gov/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to ANL Website"
        >
            <GatsbyImage
            image={images.anl.childImageSharp.gatsbyImageData}
            style={{ minWidth: 99 }}
            alt="ANL Logo"
            />
        </a>
        <a
            href="http://www.bnl.gov/world/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to BNL Website"
        >
            <GatsbyImage
            image={images.brok.childImageSharp.gatsbyImageData}
            style={{ minWidth: 99 }}
            alt="BNL Logo"
            />
        </a>
        <a
            href="https://www.cea.fr/english/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to CEA Website"
        >
            <GatsbyImage
            image={images.cea.childImageSharp.gatsbyImageData}
            style={{ minWidth: 99 }}
            alt="CEA Logo"
            />
        </a>
        <a
            href="https://cosylab.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to Cosylab Website"
        >
            <GatsbyImage
            image={images.cosylab.childImageSharp.gatsbyImageData}
            style={{ minWidth: 99 }}
            alt="Cosylab Logo"
            />
        </a>
        </Flex>
        <Flex style={style}>      
        <a
            href="http://www.desy.de/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to DESY Website"
        >
            <GatsbyImage
            image={images.desy.childImageSharp.gatsbyImageData}
            style={{ minWidth: 99 }}
            alt="DESY Logo"
            />
        </a>
        <a
            href="https://www.diamond.ac.uk/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to DLS Website"
        >
            <GatsbyImage
            image={images.dls.childImageSharp.gatsbyImageData}
            style={{ minWidth: 99 }}
            alt="DLS Logo"
            />
        </a>
        <a
            href="https://europeanspallationsource.se/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to ESS Website"
        >
            <GatsbyImage
            image={images.ess.childImageSharp.gatsbyImageData}
            style={{ minWidth: 99 }}
            alt="ESS Logo"
            />
        </a>
        <a
            href="https://www.fnal.gov/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to FNAL Website"
        >
            <GatsbyImage
            image={images.fnal.childImageSharp.gatsbyImageData}
            style={{ minWidth: 99 }}
            alt="FNAL Logo"
            />
        </a>
        <a
            href="http://www.frib.msu.edu/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to FRIB Website"
        >
            <GatsbyImage
            image={images.frib.childImageSharp.gatsbyImageData}
            style={{ minWidth: 99 }}
            alt="FRIB Logo"
            />
        </a>
        </Flex>
        <Flex style={style}>  
        <a
            href="http://www.helmholtz-berlin.de/index_en.html"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to HZB Website"
        >
            <GatsbyImage
            image={images.hzb.childImageSharp.gatsbyImageData}
            style={{ minWidth: 99 }}
            alt="HZB Logo"
            />
        </a>
        <a
            href="http://www.iter.org/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to ITER Website"
        >
            <GatsbyImage
            image={images.iter.childImageSharp.gatsbyImageData}
            style={{ minWidth: 99 }}
            alt="ITER Logo"
            />
        </a>
        <a
            href="https://www.kit.edu/english/index.php"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to KIT Website"
        >
            <GatsbyImage
            image={images.kit.childImageSharp.gatsbyImageData}
            style={{ minWidth: 99 }}
            alt="KIT Logo"
            />
        </a>
        <a
            href="https://www.psi.ch/en"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to PSI Website"
        >
            <GatsbyImage
            image={images.psi.childImageSharp.gatsbyImageData}
            style={{ minWidth: 99 }}
            alt="KIT Logo"
            />
        </a>
        <a
            href="https://neutrons.ornl.gov/sns"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to SNS Website"
        >
            <GatsbyImage
            image={images.sns.childImageSharp.gatsbyImageData}
            style={{ minWidth: 99 }}
            alt="SNS Logo"
            />
        </a>
        </Flex>
    </Container>
  );
}

export default Collaboration
