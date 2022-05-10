import React from 'react'

function GenerateButton({action, animate}) {

    const handleclick =()=>{
       setTimeout(()=> action(),500)
        animate()
    }

  return (
    <button className='button__generate' onClick={handleclick} >Generate</button>
    
  )
}

export default GenerateButton