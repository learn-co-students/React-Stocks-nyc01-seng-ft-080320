import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            
            this.props.portfolio.map((stock,index) => 
              <Stock 
                key={index}
                stock={stock} 
                handlePortfolio={this.props.handlePortfolio}
                type = "sell"
              />)
          }
      </div>
    );
  }

}

export default PortfolioContainer;
