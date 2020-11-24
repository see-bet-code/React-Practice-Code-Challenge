import React, { Fragment, useState } from 'react'

const SushiForm = (props) => {
  const [selected, setSelected] = useState(1)

  const handleSubmit = (e) => {
    e.preventDefault()
    props.reloadWallet(selected)
    
  }

  const handleChange = (e) => {
    setSelected(e.target.value)
  }

  return (
    <form style={{display: props.display}} onSubmit={handleSubmit}>
      <h1 className="sushi-details">SushiWallet!</h1>
      <select onChange={handleChange}>
        {[...Array(25).keys()].map(opt => <option value={opt+1}>{opt+1}</option>)}
      </select>
      <br></br>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default SushiForm