import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

const APIURL = 'http://localhost:3000/stocks'

class App extends Component {

  state = {
    data:[],
    purchasedStock:[],
  }

  handleClicks = (event) => {
    switch (event.target.dataset.click) {
      case "buy":
        this.buyStock(event.target)
        break;
      case "sell":
        this.sellStock(event.target)
        break;
      default:
        break;
    }
  }
  
  filterPurchasedStock = () => {
    const {data,purchasedStock} = this.state
    return data.filter(stock => purchasedStock.includes(stock.id))
  }
  
  render() {
    // console.log(this.filterPurchasedStock())
    return (
      <div>
        <Header/>
        <MainContainer 
          data={this.state.data}
          handleClicks = {this.handleClicks}
          filterPurchasedStock={this.filterPurchasedStock}
        />
      </div>
    );
  }

  buyStock = (stock) => {
    console.log(stock)
    let purchasedStock = this.state.purchasedStock
    purchasedStock.push(parseInt(stock.id, 0))
    
    this.setState({
        purchasedStock
    })
  }

  sellStock = (stock) => {
    let purchasedStock = this.state.purchasedStock
    let update = purchasedStock.filter(s => s !== parseInt(stock.id, 0))
    
    this.setState({
        purchasedStock: update
    })
  }

  componentDidMount() {
    fetch(APIURL)
      .then(res => res.json())
      .then(data => this.setState({data}))
  }
}

export default App;
