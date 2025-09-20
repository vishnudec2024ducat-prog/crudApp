import React from 'react'
// import "./Other.css"
import obj1 from "./other.module.css";
import obj2 from "./../cssCompo/card.module.css";
const Other = () => {
  return (
    <div className={` ${obj1.bgRed}`}>Other</div>
  )
}

export default Other