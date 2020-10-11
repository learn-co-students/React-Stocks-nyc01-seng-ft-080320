import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    portfolio: [],
    searchType: '',
    filter: ''
  }

   componentDidMount() {
    fetch("http://localhost:3000/stocks/")
      .then(resp => resp.json())
      .then(data => this.setState({ stocks: data}))
  }

  buyStock = (stock) => {
    this.setState({ portfolio: [...this.state.portfolio, stock] })
  }

  removeStock = (givenStock) => {
    let filteredStocks = this.state.portfolio.filter(stock => { return stock.id !== givenStock.id })
    this.setState({ portfolio: filteredStocks })
  }

  sortedStocks = () => {
    let sortedStocks = this.state.stocks
    if (this.state.searchType === "Price") {
      sortedStocks.sort((a, b) => { return a.price - b.price })
    }
    if (this.state.searchType === "Alphabetically") {
      sortedStocks.sort((a, b) => { return a.name.localeCompare(b.name) })
    }
    if (this.state.filter !== '') {
      sortedStocks = sortedStocks.filter(stock => stock.type.includes(this.state.filter))
    }
    return sortedStocks
  }

  setSearchType = (e) => {
    this.setState({ searchType: e.target.value})
  }

  filterStocks = (e) => {
    this.setState({ filter: e.target.value})
  }


  render() {
    return (
      <div>
        <SearchBar searchType={this.state.searchType} setSearchType={this.setSearchType} filterStocks={this.filterStocks}/>

          <div className="row">
            <div className="col-8">

            <StockContainer stocks={this.sortedStocks()} buyStock={this.buyStock}/>

            </div>
            <div className="col-4">

            <PortfolioContainer portfolio={this.state.portfolio} removeStock={this.removeStock}/>

            </div>
          </div>
      </div>
    );
  }
}

export default MainContainer;
