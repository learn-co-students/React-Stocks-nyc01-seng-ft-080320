import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  render() {
    return (
      <div>
        <SearchBar checked={this.props.checked} sort={this.props.sort} filter={this.props.filter}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.props.stocks} addStockHandler={this.props.addStockHandler}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.props.portfolio} removeStockHandler={this.props.removeStockHandler}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
