import React from 'react';

const SearchBar = (props) => {

    

    const localRadioChangeHandler = e => {
        props.changeHandler(e)
    }

    const localFilterHandler = e => {
        props.filterHandler(e)
    }
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={props.alphabetically} onChange={localRadioChangeHandler}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={props.price} onChange={localRadioChangeHandler}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={localFilterHandler}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
