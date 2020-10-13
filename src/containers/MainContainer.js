import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

const apiUrl = 'http://localhost:3000/stocks'

class MainContainer extends Component {
  state = {
    stocks: [],
    myStocks: [],
    filter: 'All',
    sort: 'None',
  }

  componentDidMount() {
    fetch(apiUrl)
    .then(res => res.json())
    .then(data => this.setState({
      stocks: data
    }))
  }

  updateFilter = type => {
    this.setState({ filter: type })
  }

  updateSort = sortBy => {
    this.setState({sort: sortBy})
    console.log(sortBy)
  }

  addStock= (stock) => {
    if (!this.state.myStocks.includes(stock)) {
      let myNewStocks = [...this.state.myStocks, stock]
      this.setState({
      myStocks: myNewStocks
    })
    }
    
  }

  removeStock = (stock) => {
    let index = this.state.myStocks.indexOf(stock)
    let newArr = this.state.myStocks
    newArr.splice(index, 1)
    this.setState({
      myStocks: newArr
    })
  }

  displayStocks = () => {
    let filteredStocks = [...this.state.stocks]
    if(this.state.filter !== "All") {
      filteredStocks= filteredStocks.filter(stock => stock.type === this.state.filter)
    }
    
    switch(this.state.sort) {
      case "Alphabetically": 
        return filteredStocks.sort((a,b) => a.name > b.name ? 1 : -1)
      case "Price":
        return filteredStocks.sort((a,b) => a.price > b.price ? 1 : -1)
      default:
        return filteredStocks
    }
  }
  render() {
    return (
      <div>
        <SearchBar filter={this.state.filter} sort={this.state.sort} updateFilter={this.updateFilter} updateSort={this.updateSort}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.displayStocks()} add={this.addStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.myStocks} remove={this.removeStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
