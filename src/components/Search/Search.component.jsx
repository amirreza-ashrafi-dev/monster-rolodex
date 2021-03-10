import React from 'react';
import './search.styles.css'

const Search = (props)=>{
    return <div className="search-container">
        <input type="text" placeholder="Search Monsters" onChange={props.handlesearch} className="search"/>
    </div>
}

export default Search;