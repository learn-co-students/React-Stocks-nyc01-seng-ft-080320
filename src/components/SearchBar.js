import React from 'react';

const SearchBar = (props) => {
    const localFilterHandler = (e) => {
        props.filterHandler(e.target.value)
    }

    const localSortHandler = (e) => {
        props.sortHandler(e.target.value)
    }

    return (
        <div>

        <strong>Sort by:</strong>
        <label>
            <input type="radio" value="Alphabetically" checked={props.sortVal === "Alphabetically"} onChange={localSortHandler}/>
            Alphabetically
        </label>
        <label>
            <input type="radio" value="Price" checked={props.sortVal === "Price"} onChange={localSortHandler}/>
            Price
        </label>
        <br/>

        <label>
            <strong>Filter:</strong>
            <select value={props.filterVal} onChange={localFilterHandler}>
            <option value="Tech">Tech</option>
            <option value="Sportswear">Sportswear</option>
            <option value="Finance">Finance</option>
            </select>
        </label>


        </div>
    );
}


export default SearchBar;
