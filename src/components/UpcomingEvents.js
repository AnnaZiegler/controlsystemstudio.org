import React from "react"
import styled from "styled-components"

const UpcomingEvents = () => {
  return (
    <ul>
      <li>
        <a href="https://indico.in2p3.fr/event/37441/"
        target="_blank"
        rel="noopener noreferrer"
        >20-24 April 2026 </a>            
        EPICS Collaboration Meeting hosted by
        <a href="https://irfu.cea.fr/en/index.php"
        target="_blank"
        rel="noopener noreferrer"
        > CEA Irfu </a>
        in Saclay (near Paris), France
      </li>

      <li>
        <a href="https://github.com/epics-base/epics-base/wiki/2026-EPICS-Codeathon-and-Documentathon-hosted-by-Diamond"
        target="_blank"
        rel="noopener noreferrer"
        >23-27 February 2026 </a>            
        EPICS CCodeathon hosted by
        <a href="https://www.diamond.ac.uk/"
        target="_blank"
        rel="noopener noreferrer"
        > Diamond Light Source </a>
        Harwell Campus, Oxfordshire, England
      </li>
    </ul>
  )
}

export default UpcomingEvents
