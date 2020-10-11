import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  render() {
    // console.log(this.props.data)
    const {data, handleClicks} = this.props
    // console.log(data)
    
    return (
      <div>
        <SearchBar/>

          <div className="row">
            <div className="col-8">

              <StockContainer 
                data = {data} 
                handleClicks = {handleClicks}
                click = "buy"
              />

            </div>
            <div className="col-4">

              <PortfolioContainer 
                filterPurchasedStock={this.props.filterPurchasedStock}
                click = "sell"
                handleClicks = {handleClicks}
              />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
