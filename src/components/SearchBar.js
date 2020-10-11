import React from 'react';

const SearchBar = (props) => {

  function sortHandler(e) {
   props.sortChecked(e.target.value)
  }

  function handleSelect(e) {
    props.handleSelect(e.target.value)
  }
  
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={props.sort === "Alphabetically"} onChange={sortHandler}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={props.sort === "Price"} onChange={sortHandler}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={handleSelect}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
