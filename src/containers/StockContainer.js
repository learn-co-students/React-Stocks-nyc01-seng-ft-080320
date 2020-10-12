import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

renderStocks = () => {
  return this.props.stocks.map(el => <Stock key={el.id} stock={el} stockAction={this.props.buyStocksClick}/>)
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
