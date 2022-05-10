import React, { useState } from 'react'
import Result from './Result'
import {CharacterList} from './Lists/CharacterList'
import{itemList} from './Lists/ItemList'
import {settingList} from './Lists/SettingList'
import { dungeonList } from './Lists/dungeonList'
import {weaponList} from './Lists/weaponList'
import GenerateButton from './GenerateButton'

function Generate() {
    const[campaign, setCampaign] = useState({item:"",employer:"", antagonist:"", setting:"", dungeon:""})
    
    const[jump,setJump] = useState(false)

    
    const animate =()=>{
      setJump(true);

      setTimeout(() => setJump(false), 500)
    }


    const randomizer =(list)=>{
        const randomList = list[Math.floor(Math.random()*list.length)]
        if(randomList === "weapon"){
            return randomizer(weaponList)
        }
        return randomList
    }

    const randomCampaign = ()=>{
        setCampaign({
             item:randomizer(itemList),
             employer:randomizer(CharacterList),
             antagonist:randomizer(CharacterList), 
             setting:randomizer(settingList), 
             dungeon:randomizer(dungeonList)
            })
    }

    const isCampaign = campaign.item

  return (
    <div className='container viewPage__inner ' >
        <div className='container container__center' >
          <GenerateButton action={randomCampaign} animate={animate} />
        </div>
        {(isCampaign !== "") ? (<Result campaign={campaign} jump={jump}/>):("Nothing to show")}
       
        
    </div>
  )
}

export default Generate