import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state = {
    stocks: [],
    portfolio: [],
    type: "All",
    alphabetical: false,
    price: false
  }
  
  componentDidMount() {
    fetch('http://localhost:3000/stocks')
      .then(response => response.json())
      .then(json => this.setState({stocks: json}))
  }

  addStock = stock => {
    this.setState(prev => ({portfolio: [...prev.portfolio, stock]}))
  }

  removeStock = stock => {
    this.setState(prev => ({portfolio: prev.portfolio.filter(portStock => { return portStock !== stock })}))
  }

  handleChange = (event) => {
    if (event.target.name === 'type') {
      this.setState({[event.target.name]: event.target.value})
    } else if (this.state.price !== this.state.alphabetical) {
      this.setState(prev => ({price: !prev.price, alphabetical: !prev.alphabetical}))
    } else {
      this.setState(prev => ({[event.target.name]: !prev[event.target.name]}))
    }
  }

  render() {
    return (
      <div>
        <SearchBar handleChange={this.handleChange} alphabetical={this.state.alphabetical} price={this.state.price} />

          <div className="row">
            <div className="col-8">

              <StockContainer alphabetical={this.state.alphabetical} price={this.state.price} type={this.state.type} addStock={this.addStock} stocks={this.state.stocks} />

            </div>
            <div className="col-4">

              <PortfolioContainer removeStock={this.removeStock} portfolio={this.state.portfolio} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
