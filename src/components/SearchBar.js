import React from 'react';

class SearchBar extends React.Component{

  getSortValue = e =>{
    this.props.sortUpdate(e.target.value)
  }

  getFilterValue = e =>{

  this.props.filterUpdate(e.target.value)
  }

  render(){
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={this.props.sort ==="Alphabetically"} onChange={this.getSortValue}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={this.props.sort ==="Price"} onChange={this.getSortValue}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select value={this.props.filter} onChange={this.getFilterValue}>
        <option value="All"></option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
  }
}


export default SearchBar;
