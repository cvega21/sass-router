import React from 'react'
import LogoComponent from './LogoComponent'
import reactLogo from '../assets/react-logo.svg'

const ReactApp = () => {
  return (
    <LogoComponent image={reactLogo}>
      <h1>React</h1>
    </LogoComponent>
  )
}

export default ReactApp
