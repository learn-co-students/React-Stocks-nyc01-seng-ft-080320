import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  renderStocks = () => {
    return this.props.stockArray.map(stock => <Stock key={stock.id} clickHandler={this.props.clickHandler} stock={stock} />)
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
         this.renderStocks()
        }
      </div>
    );
  }

}

export default StockContainer;
