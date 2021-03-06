import React, {useContext, useEffect, useState} from 'react'
import { createGlobalStyle } from 'styled-components'
import { Context } from './contexts/Context'
import './fonts/fonts.css'

const Style = createGlobalStyle`
  :root {  /* GLOBAL VARIABLES */
    --margin: 1.5rem;
    --navy: #0a192f;
    --light-navy: #112240;
    --lightest-navy: #233554;
    --slate: #8892b0;
    --light-slate: #a8b2d1;
    --lightest-slate: #ccd6f6;
    --white: #e6f1ff;
    --green: #64ffda;
    --trans-time: .3s;
    --trans-delay: ease-in-out;

    @media (min-width: 425px) {
      --margin: 3rem;
    }

    @media (min-width: 768px) {
      --margin: 7rem;
    }
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  } /* reset.css */

  a {
    text-decoration: none;
    color: inherit;
  }

  :before {
    font-family: 'SF Mono';
    font-weight: normal;
    color: ${({theme}) => theme === 'dark' ? 'var(--green)' : 'navy'};
  }

  body {
    font-family: 'Calibre', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({theme}) => theme === 'dark' ? 'var(--navy)' : 'white'};
    color: ${({theme}) => theme === 'dark' ? 'var(--slate)' : 'black'};
    padding: 0 var(--margin);
  }

  button {
    font-family: 'SF Mono';
    padding: 1em;
    background-color: rgba(100, 255, 218, 0);
    border-radius: .4em;
    color: ${({theme}) => theme === 'dark' ? 'var(--green)' : 'green'};
    border-color: ${({theme}) => theme === 'dark' ? 'var(--green)' : 'green'};
    border-width: .01rem;
    outline: none;
    cursor: pointer;
    transition: var(--trans-time) ease-out; /*FIXME: may want to not use 'ALL' transition properties */
    transition-property: color, background-color;

    &:hover {
      color: var(--green);
      background-color: rgba(100, 255, 218, .1);
    }
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  ${({theme}) => { 
    return (theme === 'light' && `
      h1, h2, h3, h4, h5, h6, figcaption, li, p, button, footer {
        color: black;
      }
  `)}}

  ${({pageLoaded}) => {
    return (pageLoaded && `
      body { /* Transitions */
        transition: background-color var(--trans-time) var(--trans-delay);
      }
  `)}}
`

function GlobalStyle() {
  const [pageLoaded, setPageLoaded] = useState(false)
  
  useEffect(() => {
    setPageLoaded(true)
  }, [])

  const {theme} = useContext(Context)
  return <Style {...{theme, pageLoaded}} />
}

export default GlobalStyle