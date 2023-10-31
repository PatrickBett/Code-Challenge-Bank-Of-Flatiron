import React from 'react'
import {Search} from '@mui/icons-material'

import './search.css'

export default function SearchBar(){

  const handleSearch =(event)=>{
    console.log(`${event.target.value}`)

  }
  return (
    <div id="searchbar">
        <input type="text" placeholder="Search Your Recent Transactions" className="inputBar" onChange={handleSearch}/>
        <Search className="searchIcon" />
        
        
      
    </div>
  )
}


