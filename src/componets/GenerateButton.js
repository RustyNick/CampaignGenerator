import React from 'react'

function GenerateButton({action, animate, setCampaign, setShowCampaign}) {

    const handleclick =()=>{
      setShowCampaign(false)
      setCampaign({item:"",employer:"", antagonist:"", setting:"", dungeon:""})
      action()
       /* setTimeout(()=> action(),2000) */
        animate()
    }

  return (
    <button className='button__generate' onClick={handleclick} >Generate</button>
    
  )
}

export default GenerateButton