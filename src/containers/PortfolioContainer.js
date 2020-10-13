import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {
  renderStocks = () => {
    return Object.values(this.props.stocks).map(stock => {
      return <Stock key={stock.id} parent="PortfolioContainer" stock={stock} togglePortfolio={this.props.stockClickHandler}/>
    });
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.renderStocks()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
