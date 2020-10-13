import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  renderStocks = () => {
    let stocks;
    if(this.props.stockFilter === "") return this.props.portfolio

    stocks = this.props.portfolio.filter(stock => stock.type === this.props.stockFilter)
    console.log(stocks)
    return stocks
  }
  

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            
            this.renderStocks().map((stock,index) => 
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
