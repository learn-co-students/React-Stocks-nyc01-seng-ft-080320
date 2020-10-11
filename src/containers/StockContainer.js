import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  renderStocks = () => {
    console.log(this.props.filter)
    let filteredArray = this.props.filter === "All" ? this.props.stocks : this.props.stocks.filter(el => el.type === this.props.filter)
    return filteredArray.map(el => < Stock key={el.id} stock={el} portfolioHandler={this.props.portfolioHandler}/>)
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
