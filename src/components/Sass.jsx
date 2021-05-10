import React from 'react'
import LogoComponent from './LogoComponent'
import sassLogo from '../assets/sass-logo.svg'

const Sass = () => {
  return (
    <LogoComponent image={sassLogo}>
      <h1>Sass</h1>
      <p>Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets. SassScript is the scripting language itself. Sass consists of two syntaxes. The original syntax, called "the indented syntax," uses a syntax similar to Haml.</p>
    </LogoComponent>
  )
}

export default Sass
