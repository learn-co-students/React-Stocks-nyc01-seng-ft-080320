import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    const {data,handleClicks,click} = this.props
    return (
      <div>
        <h2>Stocks</h2>
        {
          data.map((stock) => 
            <Stock 
              key={stock.id} 
              stock={stock} 
              handleClicks={handleClicks}
              click={click}
            />)
          //render the list of stocks here
        }
      </div>
    );
  }

}

export default StockContainer;
