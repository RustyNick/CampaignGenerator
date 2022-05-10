import React from 'react'

function Story({campaign}) {
    
    {/* <strong>{campaign.employer}</strong>
    <strong>{campaign.item}</strong>
    <strong>{campaign.antagonist}</strong>
    <strong>{campaign.setting}</strong>
    <strong>{campaign.dungeon}</strong> */}
 
            const murderMyster=()=>{
                const story = 
                <div>
                    the group have been invited to a party by the <strong>{campaign.employer}</strong> and it's taking place in a rather spooky <strong>{campaign.dungeon}</strong>. The party breaks abrupt when a party memeber is found dead. The thing that might be the murder weapon lies next to the corpse soaked in blood. a <strong>{campaign.item}</strong>. The group have to find the culprit that is none other than the <strong>{campaign.antagonist}</strong>. was it by pure jelousy or greed only the DM might tell.
                
                </div>
                return story
            }
            const unholyRitual=()=>{
                const story = <div>
                    The group have been asked by {campaign.employer} to save them from the evil {campaign.antagonist} who lives in the nearby {campaign.dungeon}. Everyone in the village beleives the {campaign.antagonist} is preparing an unholy ritual to curse this world and they need to be stopped. But for what the group knows this is just rumors...could this be real?
                </div>
                return story
            }
            const dragonSchemes=()=>{
                const story = <div>under construction</div>
                return story
            }
            const bounty=()=>{
                const story = <div>
                    There is a bounty on the {campaign.antagonist} offerd by {campaign.employer} and there is a reward, specifially the {campaign.item} they are offering as reward looks really intresting. they can find the {campaign.antagonist} in the nearby {campaign.dungeon}
                </div>
                return story
            }
            

            console.log()
  return (
    <div className='container__story'>        
       {(campaign.setting ==="Murder mystery")?(murderMyster()):("")}
       {(campaign.setting ==="Unholy ritual")?(unholyRitual()):("")}
       {(campaign.setting ==="Dragon schemes")?(dragonSchemes()):("")}
       {(campaign.setting ==="Bounty")?(bounty()):("")}

    </div>
  )
}

export default Story