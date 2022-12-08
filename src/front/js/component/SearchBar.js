import React from 'react'
import { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import queryString from "querystring-es3";

const SearchBar = () => {
    const { store, actions } = useContext(Context);
	const [items, setItems] = useState();

    useEffect(() => {
		searchHash("")
		const qs = queryString.parse(location.hash);
		console.log("This is parsed info: ", qs);
		searchFunction(qs.keyword);
	}, [store.allData]);
	
	const searchFunction = keyword => {
		console.log("Search function keyword: ", keyword);
		let filteredArray = store.allData.filter(item => {
			if (keyword == "" || keyword == undefined) {
				return item;
                
			} else if (item.name.toLowerCase().includes(keyword.toLowerCase())) {
				return item;
			}
		});
		actions.putInFiltered(filteredArray)
	};
	
	const searchHash = word => {
		searchFunction(word);
		if (word !== "") {
            actions.notHomeTrueOrFalse(true)
		}else if (word == "") {
            actions.putInFiltered(store.allData)
		}
		location.hash = `keyword=${word}`;

	};

  return (
    <form className="search d-flex" role="search">
        <input 
            className="form-control me-2" 
            type="search" 
            placeholder="Search" 
            aria-label="Search"
            onChange={event => searchHash(event.target.value)}
        />
        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
	</form>
  )
}

export default SearchBar