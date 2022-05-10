import Output from './Output'

function Result({campaign, jump, showCampaign, setShowCampaign}) {
  return (
    <div className = {jump ? "jump" : null}>
    <div className='container container__content' >
        <div className='container__result' >Item of importance: <div className='container__result__bold'>{campaign.item}</div></div>
        <div className='container__result'  >Questgiver: <div className='container__result__bold'>{campaign.employer}</div></div>
        <div className='container__result' >The Antagonist: <div className='container__result__bold'>{campaign.antagonist}</div></div>
        <div className='container__result' >Type of campaign: <div className='container__result__bold'>{campaign.setting}</div></div>
        <div className='container__result' >Taking place in: <div className='container__result__bold'>{campaign.dungeon}</div></div>
      <Output showCampaign={showCampaign} setShowCampaign={setShowCampaign}campaign={campaign} />
    </div>
    </div>
  )
}

export default Result