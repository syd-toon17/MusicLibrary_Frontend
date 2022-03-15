import React, {useState, useEffect} from "react";

const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState('');


    function handleSubmit(element){
        element.preventDefault()
        props.filterSongs(searchTerm)
    }

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
            <input value={searchTerm} onChange={(element) => setSearchTerm(element.target.value)} type='text' placeholder='Search our songs...'></input>
            <button type='submit'>Search!</button>
            </form>
        </div>
     );
}
 
export default SearchBar;