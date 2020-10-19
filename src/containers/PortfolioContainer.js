import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  calculateStocks = () => {
    let filteredStocks = [...this.props.api]
    if(this.props.filter !== "All"){
      console.log('All')
      filteredStocks =  filteredStocks.filter(stock => stock.type === this.props.filter)        
    } 

    switch(this.props.sort){
      case "Alphabetically":
        return filteredStocks.sort((a,b) => a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1)
      case "Price":
          return filteredStocks.sort((a,b) => a.price > b.price ? 1 : -1)
      default:
        return filteredStocks
    }
  }

  renderPortfolio = (array) => {
    let portfolioArray = array.filter(element => element.portfolio === true)
    return portfolioArray.map((element, index) => <Stock key={index} {...element} portfolioClicker={this.props.portfolioClicker}/> )
  }

  filterPortfolio = (array) =>{
    let portfolio= array.filter(element=>element.portfolio === true)
    return portfolio
  }

  render() {
    let sortedStocksArray = this.calculateStocks(this.props.api)
    let portfolioFiltered = this.filterPortfolio(sortedStocksArray)
    
    
   
   return (

 
      <div>
        <h2>My Portfolio</h2>

         {portfolioFiltered.length>0 ?
            this.renderPortfolio(portfolioFiltered):<h2>No Stocks Here Yet!</h2>
         }
      </div>
    );
  }

}

export default PortfolioContainer;
