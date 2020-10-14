import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={props.checked.includes("Alphabetically") ? true : false} onChange={props.sort}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={props.checked.includes("Price") ? true : false} onChange={props.sort}/>        
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={props.filter}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
