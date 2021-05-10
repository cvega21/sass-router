import React from 'react'
import LogoComponent from './LogoComponent'
import reactLogo from '../assets/react-logo.svg'

const ReactApp = () => {
  return (
    <LogoComponent image={reactLogo}>
      <h1>React</h1>
      <p>React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.</p>
    </LogoComponent>
  )
}

export default ReactApp
