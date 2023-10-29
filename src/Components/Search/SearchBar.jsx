import React from 'react'
import {Search} from '@mui/icons-material'

import './search.css'

export default function SearchBar(){
  return (
    <div id="searchbar">
        <input type="text" placeholder="Search Your Recent Transactions" className="inputBar"/>
        <Search className="searchIcon" />
        
        
      
    </div>
  )
}


