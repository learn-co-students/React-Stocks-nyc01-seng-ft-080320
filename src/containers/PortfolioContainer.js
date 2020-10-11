import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  list = () => {
    return this.props.stocks.map(stock => {
      return <Stock key={stock.id}  stock={stock} clickHandler={this.props.sell} />
    })
  }
  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.list()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
