import Story from './Story'



function Output({campaign, showCampaign, setShowCampaign}) {

    const handleClick= ()=>{
        setShowCampaign(true)
    }

    return (
        <div className='container__story'>
           <button className='button__example' onClick={handleClick}>Give an example</button>
           {(showCampaign==true)?(<Story campaign={campaign}/>):("")}
        </div>
  )
}

export default Output