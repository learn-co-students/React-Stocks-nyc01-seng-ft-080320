import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  renderStocks = () => {
    let typeStocks = this.props.stocks;
    if (this.props.type !== 'All') {
      typeStocks = this.props.stocks.filter(stock => { return stock.type === this.props.type })
    } 

    if (this.props.alphabetical) {
      typeStocks.sort((a, b) => (a.name > b.name) ? 1 : -1);
    } 
    if (this.props.price) {
      typeStocks.sort((a, b) => (a.price > b.price) ? 1 : -1);
    }
    
    return typeStocks.map(stock => { 
      return <Stock 
                key={stock.id} 
                stock={stock} 
                handleClick={this.props.addStock} /> 
    })
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
