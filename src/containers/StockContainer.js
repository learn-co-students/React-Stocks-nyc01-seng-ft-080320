import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {
  list = () => {
    return this.props.stocks.map(stock => {
      return <Stock key={stock.id} stock={stock} clickHandler={this.props.buy} />
    })
  }
  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.list()
        }
      </div>
    );
  }

}

export default StockContainer;
