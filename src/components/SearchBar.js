import React from 'react';

const SearchBar = props => {
  const handleChange = event => {
    event.persist();
    props.handleChange(event)
  }

  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" name="alphabetical" value="Alphabetically" checked={props.alphabetical} onChange={handleChange}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" name="price" value="Price" checked={props.price} onChange={handleChange}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={handleChange} name="type">
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
