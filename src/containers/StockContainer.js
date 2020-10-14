import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.props.stocks.map(obj=> <Stock stock={obj} key={obj.id} stockHandler={this.props.addStockHandler}/>)}
      </div>
    );
  }

}

export default StockContainer;
