import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'
const API = "http://localhost:3000/stocks"

class MainContainer extends Component {
  state = {
    stocks: [],
    bought: [],
    checked: "",
    filter: ""
  }

  stockList = () =>{
    let stocks = this.state.stocks
    if (this.state.checked === "Price"){
      stocks = stocks.sort((a,b) => a.price > b.price ? 1 : -1)
    }else if (this.state.checked === "Alphabetically"){
      stocks = stocks.sort((a, b) => a.name > b.name ? 1 : -1)  
    }
    stocks = stocks.filter(stock => stock.type.includes(this.state.filter))
    return stocks
  }

  filter = (e) => {
    let type = e.target.value
    this.setState({filter: type})
  }

  buyStock = (stock) => {
    this.setState(prevState => {
      if (this.state.bought.includes(stock)){
        console.log("already bought")
      }else{
        return {bought: [...prevState.bought, stock]}
      }
    })
  }
  sellStock = (stock) => {
    let newArray = this.state.bought.filter(currentStock => currentStock.id !== stock.id)
    this.setState({bought: newArray})
  }

  sort = (e) => {
    this.setState({checked: e.target.value})
  }

  componentDidMount = () => {
    fetch(API)
    .then(resp => resp.json())
    .then(stocks => this.setState({stocks: stocks}))
  }
  render() {
    return (
      <div>
        
        <SearchBar checked={this.state.checked} sort={this.sort} filter={this.filter}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.stockList()} buy={this.buyStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.bought} sell={this.sellStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
