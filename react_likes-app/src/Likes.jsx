import React, { useState } from 'react'
import TotalLikes from './TotalLikes'

const Likes = () => { 
  let [totalLikes, setTotalLikes] = useState(0)

  const clickInc = () => {
    let sumLikes = totalLikes + 1
    setTotalLikes(sumLikes)
  }

  const clickDec = () => {
    let diffLikes = totalLikes - 1
    setTotalLikes(diffLikes)
  }

return (
  <div>
    <TotalLikes display={totalLikes}/>
    <button onClick={clickInc}>+</button>
    <button onClick={clickDec}>-</button>
  </div>
)
}
export default Likes