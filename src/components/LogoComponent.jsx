import React from 'react'

const LogoComponent = (props) => {
  return (
    <div className="LogoComponent">
      {props.children}
      <img src={props.image} alt={props.image}></img>
    </div>
  )
}

export default LogoComponent
