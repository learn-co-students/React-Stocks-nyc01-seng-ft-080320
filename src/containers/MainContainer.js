import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {


  state={
    api:[],
    filter: "All",
    sort: "none"
  }

  componentDidMount(){
    let API="http://localhost:3000/stocks"
    fetch(API)
    .then(res=>res.json())
    .then(data=>this.addPropToData(data))
  }

  addPropToData = data =>{
    let api=data.map(stock=>{return {...stock, portfolio:false }})
    this.setState({api:api})
  }

  addToPortFolio = (stock) =>{
    console.log('in adder')
    console.log(stock)
    let stockInApi = this.state.api.find(element => element.id === stock.id)
    stockInApi.portfolio = true
    this.setState({...this.state.api, stockInApi})
    
  }


  sortUpdate = value => {
    this.setState({sort:value})
  }

  updateFilter = value =>{
    this.setState({filter:value})
  }

  removeFromPortfolio = (stock) =>{
    
    let stockInApi = this.state.api.find(element => element.id === stock.id)
    stockInApi.portfolio = false
    
    this.setState({...this.state.api, stockInApi})
    
  }

  calculateStocks = () => {
    let filteredStocks = [...this.state.api]
    if(this.state.filter !== "All"){
      filteredStocks =  filteredStocks.filter(stock => stock.type === this.state.filter)        
    } 

    switch(this.state.sort){
      case "Alphabetically":
        return filteredStocks.sort((a,b) => a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1)
      case "Price":
          return filteredStocks.sort((a,b) => a.price > b.price ? 1 : -1)
      default:
        return filteredStocks
    }
  }
  

  render() {

    let stocksArray = this.calculateStocks(this.state.api)
    
    console.log(this.state)
    return (
      <div>
        <SearchBar sort ={this.state.sort} filter = {this.state.filter} sortUpdate={this.sortUpdate} filterUpdate = {this.updateFilter}/>

          <div className="row">
            <div className="col-8">

              <StockContainer sort={this.state.sort} api={stocksArray} portfolioClicker={this.addToPortFolio}/>

            </div>
            <div className="col-4">
              
              <PortfolioContainer api={this.state.api} filter={this.state.filter} sort={this.state.sort} portfolioClicker={this.removeFromPortfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
