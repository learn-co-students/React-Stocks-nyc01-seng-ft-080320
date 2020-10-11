import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

const BASE_URL = 'http://localhost:3000/stocks/'

class MainContainer extends Component {

  state = {
    stocks: [],
    portfolioStocks: [],
    sort: "",
    filter: "All"
  }

  componentDidMount = () => {
    fetch(BASE_URL)
    .then(resp => resp.json())
    .then(stocksData => {
      this.setState({
        stocks: stocksData
      })
    })
  }

  portfolioHandler = (stockObj) => {
    let newArray = [...this.state.portfolioStocks,stockObj]
    this.setState({
      portfolioStocks: newArray
    })
  }

  removeStock = (stockObj) => {
    let newArray = [...this.state.portfolioStocks]
    var index = newArray.indexOf(stockObj)
    newArray.splice(index, 1)
    this.setState({
      portfolioStocks: newArray
    })
  }

  sortChecked = (sortValue) => {
    this.setState({ sort: sortValue})
    
    let array = [...this.state.stocks]

    if(sortValue === "Price"){
      let sortedArray = array.sort((a, b) => a.price - b.price)
      this.setState({
        stocks: sortedArray
      })
    }else if(sortValue === "Alphabetically"){
      let sortedArray = array.sort((a, b) => {
        if(a.name < b.name){
          return -1
        }
        if(a.name > b.name){
          return 1
        }
        return 0
      })
      this.setState({
        stocks: sortedArray
      })
    }
    }

    handleSelect = (filterValue) => {
      // let newArray = [...this.state.stocks]
      // let filteredArray = newArray.filter(el => el.type === filter)

      this.setState({
        filter: filterValue
      })
    }

  render() {
    return (
      <div>
        <SearchBar handleSelect={this.handleSelect} sortChecked={this.sortChecked} sort={this.state.sort}/>

          <div className="row">
            <div className="col-8">

              <StockContainer filter={this.state.filter} stocks={this.state.stocks} portfolioHandler={this.portfolioHandler}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.portfolioStocks} portfolioHandler={this.removeStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
