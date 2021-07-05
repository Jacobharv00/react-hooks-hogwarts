import { useState } from 'react'
import PigDetails from './PigDetails'


function Pig({pig}) {
  // console.log('Pig Component', pig)
  const [pigDetails, setPigDetails] = useState(false)
  
  function handlePigClick() {
    setPigDetails(!pigDetails)
  }

  return (
    <div className='ui eight wide column'>
      <h2 onClick={handlePigClick} style={{cursor: 'pointer'}}>{pig.name}</h2>
      <img src={pig.image} alt={pig.name} width='300px' height='300px'/>
        { pigDetails ? <PigDetails pig={pig}/> : null }
    </div>
  )
}

export default Pig

// Don't need a button now you just click on the pig name to show details
  {/* <button onClick={handlePigClick}>
        {pigDetails ? 'Less Info' : 'More Info'}
      </button> */}





