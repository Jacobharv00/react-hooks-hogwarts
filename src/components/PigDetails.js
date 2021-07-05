
function PigDetails({pig}) {

  const {greased, weight, specialty, 'highest medal achieved': medal} = pig
  // console.log(pig["highest medal achieved"])
  return (
    <div>
      <p>{greased ? 'Greased' : 'Un-greased'}</p>
      <p>Weight: {weight}</p>
      <p>Specialty: {specialty}</p>
      <p>Highest Medal Achieved: {medal}</p>
    </div>
  )
}

export default PigDetails

