import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

state = {
  api : [],
  portfolioIds : []
}

componentDidMount(){
  fetch("http://localhost:3000/stocks")
  .then(resp => resp.json())
  .then(data => {
    this.setState({api: data})
  })
}

buyStocksClick = (id) => {
 if(!this.state.portfolioIds.find(portId => portId === id)){
   this.setState({portfolioIds : [...this.state.portfolioIds, id ]})
  }
}

sellStocksClick = (id) => {
    this.setState({
      portfolioIds: this.state.portfolioIds.filter(stock => stock !== id)
  })
}



  render() {
    let portfolioStocks= this.state.portfolioIds.map(id => this.state.api.find(stock => stock.id === id) )
    return (
      <div>
        <SearchBar/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.api} buyStocksClick={this.buyStocksClick}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={portfolioStocks} sellStocksClick={this.sellStocksClick}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
