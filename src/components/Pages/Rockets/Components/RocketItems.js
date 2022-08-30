import React from 'react'
import Rocket from './Rocket'

const RocketItems = ({ rockets }) => {
  console.log(rockets)
  return (
    <div>
       {rockets.map((rocket) => (
        <Rocket key={rocket.id} rocket={rocket} />
       ))}
    </div>
  )
}

export default RocketItems
