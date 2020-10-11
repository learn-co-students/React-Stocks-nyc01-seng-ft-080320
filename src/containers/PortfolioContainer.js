import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {
    renderPortfolioStocks = () => {
        return this.props.stocks.map(stock => {
            return <Stock clickHandler={this.props.clickHandler}key={stock.id} stock={stock}/>
        })
    }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.renderPortfolioStocks()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
