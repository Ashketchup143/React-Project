import React from 'react'

const TextInput = ({value, onChange}) => {
  return (
    <input placeholder='Search' type='text' value={value} onChange={onChange}/>
  )
}

export default TextInput
