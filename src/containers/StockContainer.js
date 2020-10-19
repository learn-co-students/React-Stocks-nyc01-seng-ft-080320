import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  sortStocks = () => {
    if (this.props.sortType === "Price") {
      return this.props.allStocks.sort((a,b) => a.price > b.price ? 1 : -1)
    } else {
      return this.props.allStocks.sort((a,b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
    }
  }

  renderStocks = () => {
    let sortedStocks = this.sortStocks()
    if (this.props.filterType === "All") {
      return sortedStocks.map(stock => <Stock stock={stock} key={stock.id} changePortfolio={this.props.addToPortfolio} />)
    } else {
      return sortedStocks.filter(s => s.type.includes(this.props.filterType)).map(stock => <Stock stock={stock} key={stock.id} changePortfolio={this.props.addToPortfolio} />)
    }

  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.renderStocks()}
      </div>
    );
  }

}

export default StockContainer;
