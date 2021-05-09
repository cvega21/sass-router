import React from 'react'
import LogoComponent from './LogoComponent'
import nodeLogo from '../assets/nodejs-logo.svg'

const Node = () => {
  return (
    <LogoComponent image={nodeLogo}>
      <h1>Node</h1>
    </LogoComponent>
  )
}

export default Node
