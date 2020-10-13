import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  renderStocks = () => {
    debugger;
    let stocksToDisplay = Object.values(this.props.stocks);
    if(this.props.sortBy === "Alphabetically")
      stocksToDisplay.sort((a, b) => (a.name > b.name) ? 1 : -1);
    else if(this.props.sortBy === "Price")
      stocksToDisplay.sort((a,b)=> a.price > b.price? 1: -1);

    if(this.props.searchBy && this.props.searchBy !== "")
      stocksToDisplay = stocksToDisplay.filter(stock => stock.type === this.props.searchBy)
    
    return stocksToDisplay.map(stock => {
      return <Stock key={stock.id} stock={stock} parent="StockContainer" togglePortfolio={this.props.stockClickHandler}/>
    });
  }

  render() {
    //console.log("rendering StockContainer with the following stocks:",this.state);
    //debugger;
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
