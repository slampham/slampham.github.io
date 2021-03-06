import React from 'react'
import styled from 'styled-components'

import { ContextProvider } from '../contexts/Context'
import GlobalStyle from '../GlobalStyle'
import Nav from './Nav'
import Cover from './Cover'
import Section, { StyledSection } from './Section'
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  counter-reset: sectionCounter 1;

  ${StyledSection} {
    padding: 5em 0;
  }
`

function App() {
  return (
    <StyledApp>
      <ContextProvider>
        <GlobalStyle/>
        <Nav />
        <Cover path='about'/>
        <Section header='Projects' path='projects' >
          <Projects />
        </Section>
        <Section header='Skills' path='skills' >
          <Skills />
        </Section>
        <Section header="Let's get in touch!" path='contact' >
          <Contact />
        </Section>
      </ContextProvider>
    </StyledApp>
  );
}

export default App;
