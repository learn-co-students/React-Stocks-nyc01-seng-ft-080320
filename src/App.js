import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

const API = "http://localhost:3000/stocks"


class App extends Component {

  
  state = {
    api: [],
    portfolio: [],
    checked: "",
    filter: ""
  }

  componentDidMount = () => {
    this.getStocks()
  }

  stockList = () =>{
    let stocks = this.state.api
    if (this.state.checked === "Price"){
      stocks = stocks.sort((a,b) => a.price > b.price ? 1 : -1)
    }else if (this.state.checked === "Alphabetically"){
      stocks = stocks.sort((a, b) => a.name > b.name ? 1 : -1)  
    }
    stocks = stocks.filter(stock => stock.type.includes(this.state.filter))
    return stocks
  }

  getStocks = () => {
    fetch(API)
    .then(resp => resp.json())
    .then(data => this.setState({api: data}))
  }

  addStockHandler = (stock) => {
    this.setState(currentState=> {
      let newArr = [...currentState.portfolio, stock]
      return {portfolio: newArr}
    })
  }
  removeStockHandler = (stock) => {
    let foundObj = this.state.portfolio.indexOf(stock)
    this.setState(currentState=> {
      currentState.portfolio.splice(parseInt(foundObj, 10), 1)
      let newArr = this.state.portfolio
      return {portfolio: newArr}
    })
  }

  filter = (e) => {
    let type = e.target.value
    this.setState({filter: type})
  }

  sort = (e) => {
    this.setState({checked: e.target.value})
  }

  render() {
    console.log(this.state.portfolio)
    return (
      <div>
        <Header/>
        <MainContainer checked={this.state.checked} sort={this.sort} filter={this.filter} stocks={this.stockList()} addStockHandler={this.addStockHandler} removeStockHandler={this.removeStockHandler} portfolio={this.state.portfolio}/>
      </div>
    );
  }
}

export default App;
