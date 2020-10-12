import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

const APIURL = 'http://localhost:3000/stocks'

class MainContainer extends Component {

  state = {
    api:[],
    portfolio:[],
  }

  handlePortfolio = (stock, type) => {
    switch (type) {
      case "buy":
        this.buyStock(stock)
        break;
      case "sell":
        this.sellStock(stock)
        break;
      default:
        break;
    }

    
  }  

  buyStock = (stock) => {
    const portfolio = this.state.portfolio
    const newStock = this.state.api.find(ele => ele === stock)
    
    portfolio.push(newStock)
    this.setState({
      portfolio
    })
  }

  sellStock = (stock) => {
    let portfolio = this.state.portfolio
    
    let index = portfolio.findIndex(ele => ele === stock)
    portfolio.splice(index,1)
    
    this.setState({
      portfolio
    })
  }
  
  

  render() {
    // console.log(this.state.portfolio)
    return (
      <div>
        <SearchBar/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.api} handlePortfolio={this.handlePortfolio}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.portfolio} handlePortfolio={this.handlePortfolio}/>

            </div>
          </div>
      </div>
    );
  }

  componentDidMount() {
    fetch(APIURL)
      .then(res => res.json())
      .then(api => this.setState({api}))
  }
  

}

export default MainContainer;
