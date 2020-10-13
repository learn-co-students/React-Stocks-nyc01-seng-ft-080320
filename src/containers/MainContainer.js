import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state={
    stocksURL: "http://localhost:3000/stocks/",
    allStocks: []
  }

  fetchStocks = () => {
    fetch(this.state.stocksURL)
    .then(resp => resp.json())
    .then(stocksData => this.setState({allStocks: stocksData}))
  }

  componentDidMount() {
    this.fetchStocks();
  }

  render() {
    return (
      <div>
        <SearchBar/>

          <div className="row">
            <div className="col-8">

              <StockContainer allStocks={this.state.allStocks}/>

            </div>
            <div className="col-4">

              <PortfolioContainer/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
