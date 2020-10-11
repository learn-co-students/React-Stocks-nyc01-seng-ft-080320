import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

    // filteredStocks = () => {
    //     if(this.props.alphabetically === false && this.props.price === false){
    //         return this.props.stocks
    //     } else if(this.props.alphabetically === true){
    //         return this.props.stocks.sort((a, b) => {
    //             if(a.name < b.name){
    //                 return -1;
    //             }
    //             if(b.name < a.name){
    //                 return 1;
    //             }
    //             return 0
    //         })
    //     } else if(this.props.price === true){
    //         return this.props.stocks.sort((a, b) => {
    //             return b.price - a.price
    //         })
    //     } 
    // }
    // categoryFiltered = (filteredWord) => {
    //     if(this.props.filter === ''){
    //          return this.filteredStocks()
    //     } else {
    //         return this.filteredStocks().filter(stock => {
    //             return stock.type === filteredWord
    //         })
    //     }
    // }

    renderStocks = () => {
        return this.props.stocks(this.props.filter, this.props.stockDataSource).map(stock => {
            return <Stock clickHandler={this.props.clickHandler}key={stock.id} stock={stock}/>
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
