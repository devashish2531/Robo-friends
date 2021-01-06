import React from 'react';
const SearchBox = ({searchfield,searchChange}) =>{
    return (
        <div >
            <input className="pa3 br3  bg-lightest-blue" type="search" placeholder="Search Robo Friends :" onChange = {searchChange}></input>
            
        </div>
        
    )
}
 export default SearchBox;