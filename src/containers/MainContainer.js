import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state = {
    stocks: {},
    filterBy:"",
    sortBy:"",
  }

  componentDidMount(){
    fetch('http://localhost:3000/stocks')
    .then(res => res.json())
    .then(stocks => {
      let resStocks = {};
      stocks.forEach(stock => {
        resStocks[stock.id] = {...stock, portfolio: false};
      })
      this.setState({stocks: stocks});
    })
  }
  stockClickHandler = (clickedStock) => {
    
    this.setState({...this.state.stocks}[clickedStock.id] = clickedStock);
  }

  handleSearch = term => {
    let targetState = this.state;
    targetState.searchBy = term;
    this.setState(targetState);
  }

  handleSort = term => {
    let targetState = this.state;
    targetState.sortBy = term;
    this.setState(targetState);
  }

  render() {
    console.log("before rendering my child containers:",this.state.stocks);
    return (
      <div>
        <SearchBar onSearchChange={this.handleSearch} onSortChange={this.handleSort}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.stocks} searchBy={this.state.searchBy} sortBy={this.state.sortBy} stockClickHandler={this.stockClickHandler}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={Object.values(this.state.stocks).filter(stock => stock.portfolio)} stockClickHandler={this.stockClickHandler}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
