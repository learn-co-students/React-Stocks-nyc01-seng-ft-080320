import React, { Component } from 'react'


export default class SearchBar extends Component {

  state={
    Alphabetically: false,
    Price:false
  }

  handleSortby = (event) => {
    this.props.handleSortStocks(event)

    if(event.target.value === "Alphabetically"){
      this.setState({
        Alphabetically: true,
        Price:false,
      })
    }

    if(event.target.value === "Price"){
      this.setState({
        Alphabetically: false,
        Price: true,
      })
    }
  }
  

  render() {
    return (
      <div>
        <strong>Sort by:</strong>
        <label>
          <input type="radio" value="Alphabetically" checked={this.state.Alphabetically} onChange={this.handleSortby}/>
          Alphabetically
        </label>
        <label>
          <input type="radio" value="Price" checked={this.state.Price} onChange={this.handleSortby}/>
          Price
        </label>
        <br/>

        <label>
          <strong>Filter:</strong>
          <select onChange={this.handleSortby}>
            <option value=''></option>
            <option value="Tech">Tech</option>
            <option value="Sportswear">Sportswear</option>
            <option value="Finance">Finance</option>
          </select>
        </label>
      </div>
    )
  }
}
