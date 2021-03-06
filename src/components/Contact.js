import React, { useContext } from 'react'
import styled from 'styled-components'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Context } from '../contexts/Context'

const StyledContact = styled.section`
  text-align: center;

  > * {
    margin: 1em 0;
  }

  button {
    font-size: 1rem;
  }

  ul {
    color: ${({theme}) => theme === 'dark' ? 'var(--light-slate)' : 'black'};
    font-size: 1.5rem;
    list-style-type: none;
    display: flex;
    justify-content: center;

    > * {
      margin: 0 1em;
    }

    .icon:hover {
      color: var(--green);
    }
  }

  footer {
    margin-top: 5em;
    font-size: .9rem;
    color: DarkGray;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      max-width: 500px;
    }
  }
`

function Contact() {
  const {theme} = useContext(Context)

  return (
    <StyledContact theme={theme}>
      <p>Again, please contact me if you're interested or have a position open for a web developer. I have a strong work ethic, and I'll make sure that any product that I work on is completed to perfection!</p>

      <button onClick={() => window.location.href='mailto:spencernpham@gmail.com'}>Contact Me</button>

      <ul>
        <a href='https://github.com/slampham' target="_blank" rel="noopener noreferrer">
          <FaGithub className='icon'/>
        </a>

        <a href='https://linkedin.com/in/spencer-pham' target="_blank" rel="noopener noreferrer">
          <FaLinkedin className='icon'/>
        </a>
      </ul>

      <footer>
        Credit goes to Brittany Chiang for the inspiration on the theme and UI
      </footer>
    </StyledContact>
  )
}

export default Contact
