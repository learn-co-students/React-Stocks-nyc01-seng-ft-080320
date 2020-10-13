import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.props.stocks.map(el => <Stock key={el.id} stock={el} event={this.props.add}/>)
        }
      </div>
    );
  }

}

export default StockContainer;
