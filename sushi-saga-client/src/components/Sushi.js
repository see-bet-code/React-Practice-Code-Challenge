import React, { Fragment, useState } from 'react'

const Sushi = (props) => {
  const [eaten, setTable] = useState(props.eaten)

  const addToTable = () => {
    if (!eaten) {
      setTable(true)
      props.handleTable(props.sushi)
    } else {
      console.log("You've already added this to your table")
    }
    
  }

  return (
    <div className="sushi">
      <div className="plate" 
           onClick={addToTable}>
        { 
          eaten ?
            null
          :
            <img src={props.sushi.img_url} alt={props.sushi.name}width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi