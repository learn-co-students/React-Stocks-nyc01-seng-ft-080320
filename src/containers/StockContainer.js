import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    const {stocks, handlePortfolio} = this.props
    
    return (
      <div>
        <h2>Stocks</h2>
        {
          stocks.map(stock => 
            <Stock 
              key = {stock.id}
              stock={stock} 
              handlePortfolio={handlePortfolio}
              type = "buy"
            />) 
          //render the list of stocks here
        }
      </div>
    );
  }

}

export default StockContainer;
