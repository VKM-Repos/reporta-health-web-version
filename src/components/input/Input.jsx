import React from 'react'

export default function Input(props) {
  return (
    <input 
        type={props.type}
        placeholder={props.placeholder}
        className={props.className}
        onChange={props.onChange ? ()=> props.onChange : null }
    />
  )
}
