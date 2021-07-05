// import { useState } from 'react'
import Pig from './Pig'



function HogList({pigs}) {
  // console.log('HogList', pigs)
  return (
    <div className='ui grid container'>
      {pigs.map((pig) => (
        <Pig 
          key={pig.name}
          pig={pig}
        />
        ))
      }
    </div>
  )
}

export default HogList

