import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    api: [],
    portfolio: [],
    filterValue: "ALL"
  }


  componentDidMount() {
    fetch('http://localhost:3000/stocks')
    .then(resp => resp.json())
    .then(data => this.setState({
      api: data
    }))
}

  buyStock = stockObj => {
    
    if (this.state.portfolio.includes(stockObj))
    {null} else {
    this.setState({
      portfolio: [...this.state.portfolio, stockObj]
    })
  }
  }

  removeStock = stockObj => {
    let newArray = this.state.portfolio.filter(stock => stock.id !== stockObj.id);
    this.setState({
      portfolio: newArray
    })
  }

  radioButtonHandler = value => {
    
    if(value === "Alphabetically") {
      let newArray = [...this.state.api]
      let alphaSort = newArray.sort(function(a, b) {
        if (a.name > b.name){
            return 1
        } else if (a.name < b.name){
            return -1
        } else{
            return 0
        }});
      this.setState({
        api: alphaSort
      })
    } else {
      let newArray = [...this.state.api]
      let priceSort = newArray.sort((a, b) => b.price - a.price)
      this.setState({
        api: priceSort
      })
    }
  }

  filteredApi = () => {
    if (this.state.filterValue === "ALL") {
      return this.state.api 
    } else {
        return this.state.api.filter(stock => stock.type === this.state.filterValue
    )}
  
  }

  filterHandler = obj => {
    this.setState({
      filterValue: obj
    })
  }



  render() {
    
    return (
      <div>
        <SearchBar filterHandler={this.filterHandler} radioButtonHandle={this.radioButtonHandler} />

          <div className="row">
            <div className="col-8">

              <StockContainer clickHandler={this.buyStock} stockArray={this.filteredApi()} />

            </div>
            <div className="col-4">

              <PortfolioContainer clickHandler={this.removeStock} portfolio={this.state.portfolio} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
