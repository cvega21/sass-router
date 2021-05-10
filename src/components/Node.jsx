import React from 'react'
import LogoComponent from './LogoComponent'
import nodeLogo from '../assets/nodejs-logo.svg'

const Node = () => {
  return (
    <LogoComponent image={nodeLogo}>
      <h1>Node</h1>
      <p>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.</p>
    </LogoComponent>
  )
}

export default Node
