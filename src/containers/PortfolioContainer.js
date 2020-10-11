import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  

  render() {
    const{filterPurchasedStock,click, handleClicks} = this.props
    
    
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            filterPurchasedStock().map((stock) => 
              <Stock 
                stock={stock} 
                key={stock.id} 
                click={click}
                handleClicks={handleClicks} 
              />)
            //render your portfolio stocks here
          }
      </div>
    );
  }

}

export default PortfolioContainer;
