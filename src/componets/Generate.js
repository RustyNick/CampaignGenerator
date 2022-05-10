import React, { useState } from 'react'
import Result from './Result'
import {CharacterList} from './Lists/CharacterList'
import{itemList} from './Lists/ItemList'
import {settingList} from './Lists/SettingList'
import { dungeonList } from './Lists/dungeonList'
import {weaponList} from './Lists/weaponList'

function Generate() {
    const[campaign, setCampaign] = useState({item:"",employer:"", antagonist:"", setting:"", dungeon:""})
    
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
        <button className='button__generate' onClick={randomCampaign} >Generate</button>
        </div>
        {(isCampaign !== "") ? (<Result campaign={campaign}/>):("Nothing to show")}
       
        
    </div>
  )
}

export default Generate