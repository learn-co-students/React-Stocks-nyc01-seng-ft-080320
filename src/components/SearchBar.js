import React from 'react';

class SearchBar extends React.Component {

  state = {
    clicked: false,
  }

  radioButtonHandle = event => {
    this.props.radioButtonHandle(event.target.value)
    this.setState({
      clicked: event.target.value
    })
  }

  getFilterValue = (e) => {
    this.props.filterHandler(e.target.value)
  }

  
  render() {
    console.log()
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={this.state.clicked === "Alphabetically"} onChange={this.radioButtonHandle}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={this.state.clicked === "Price"} onChange={this.radioButtonHandle}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={this.getFilterValue}>
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
