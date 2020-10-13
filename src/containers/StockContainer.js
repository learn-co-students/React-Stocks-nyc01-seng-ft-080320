import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  renderStocks = () => {
    if (this.props.filterType === "All") {
      return this.props.allStocks.map(stock => <Stock stock={stock} key={stock.id} changePortfolio={this.props.addToPortfolio} />)
    } else {
      return this.props.allStocks.filter(s => s.type.includes(this.props.filterType)).map(stock => <Stock stock={stock} key={stock.id} changePortfolio={this.props.addToPortfolio} />)
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
