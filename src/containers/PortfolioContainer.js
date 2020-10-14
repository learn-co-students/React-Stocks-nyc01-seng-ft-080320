import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  renderPortfolio = () => {
    return this.props.stocks.map(stock => {
      return <Stock key={stock.id}  stock={stock} stockHandler={this.props.removeStockHandler} />
    })
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
        {this.renderPortfolio()}
      </div>
    );
  }

}

export default PortfolioContainer;
