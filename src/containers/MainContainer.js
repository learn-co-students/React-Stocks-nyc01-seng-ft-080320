import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state={
    stocksURL: "http://localhost:3000/stocks/",
    allStocks: [],
    portfolio: []
  }

  fetchStocks = () => {
    fetch(this.state.stocksURL)
    .then(resp => resp.json())
    .then(stocksData => this.setState({allStocks: stocksData}))
  }

  componentDidMount() {
    this.fetchStocks();
  }

  addToPortfolio = (stock) => {
    if (!this.state.portfolio.find(ms => ms.id === stock.id)) {
      this.setState(prevState => {
        return {
          portfolio: [...prevState.portfolio, stock]
        }
      })
    }

  }

  removeFromPortfolio = (stock) => {
    let newPortfolio = [...this.state.portfolio]
    let stockIndex = newPortfolio.findIndex(s => s.id === stock.id)
    newPortfolio.splice(stockIndex, 1)
    this.setState({portfolio: newPortfolio})
  }

  render() {
    return (
      <div>
        <SearchBar/>

          <div className="row">
            <div className="col-8">

              <StockContainer allStocks={this.state.allStocks} addToPortfolio={this.addToPortfolio}/>

            </div>
            <div className="col-4">

              <PortfolioContainer myStocks={this.state.portfolio} removeFromPortfolio={this.removeFromPortfolio} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
