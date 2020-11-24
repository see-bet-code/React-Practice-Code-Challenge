import React, { Fragment, useState } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  const [startIndex, setIndex] = useState(0)
  const allSushi = props.sushi.map(s => <Sushi key={s.id} sushi={s} handleTable={props.handleTable}/>)

  const incrementIndex = () => {
    let newIndex = startIndex + 4
    if (newIndex > allSushi.length) {
      newIndex = 0
    }
    setIndex(newIndex)
  }
  
  return (
    <Fragment>
      <div className="belt">
        {
          [...allSushi].splice(startIndex, 4)
        }
        <MoreButton more={incrementIndex} eaten={false}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer