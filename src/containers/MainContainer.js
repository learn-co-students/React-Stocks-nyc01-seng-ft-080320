import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

const APIURL = 'http://localhost:3000/stocks'

class MainContainer extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      api:[],
      portfolio:[],
      displayedPortfolio:[],
    }
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
  
  handleSortStocks = (event) => {
    let key;
    switch (event.target.value) {
      case "Alphabetically":
        key = 'name'
        this.sortStocks(key)
        break;
      case "Price":
        key = 'price'
        this.sortStocks(key)
        break;
      case "Tech":
        key=('Tech')
        this.filterStocks(key)
        break;
      case "Sportswear":
        key=('Sportswear')
        this.filterStocks(key)
        break;
      case "Finance":
        key=('Finance')
        this.filterStocks(key)
        break;
      case "":
        key=('')
        
        this.filterStocks(key)
        break;
        
        
      default:
        break;
    }
  }

  render() {
    // console.log(this.state.portfolio)
    return (
      <div>
        <SearchBar handleSortStocks={this.handleSortStocks}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.api} handlePortfolio={this.handlePortfolio}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.displayedPortfolio} handlePortfolio={this.handlePortfolio}/>

            </div>
          </div>
      </div>
    );
  }

  filterStocks = (key) => {
    let portfolio = this.state.portfolio
    let displayedPortfolio = []
    
    if(key === ''){
      return(
      this.setState({
        displayedPortfolio: portfolio
      }))
    } 
    
    displayedPortfolio = portfolio.filter(stock => stock.type === key)

    this.setState({
      displayedPortfolio
    })
  }
  

  sortStocks = (key) => {
    let portfolio = this.state.portfolio
    let dataA, dataB
    
    portfolio.sort((a,b)=>{
      if(key === 'name'){
        dataA = a[key].toUpperCase()
        dataB = b[key].toUpperCase()
      }else{
        dataA = a[key]
        dataB = b[key]
      }
    
      if(dataA<dataB) return -1
      if(dataA>dataB) return 1
      return 0
    })

    this.setState({
      displayedPortfolio: portfolio
    })
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

  componentDidMount() {
    fetch(APIURL)
      .then(res => res.json())
      .then(api => this.setState({api}))
  }
  
  componentDidUpdate(prevProps, prevState) {
    if(prevState.displayedPortfolio === this.state.displayedPortfolio){
      console.log('working')
      // this.setState({displayedPortfolio: this.state.portfolio})

      this.state.displayedPortfolio = this.state.portfolio
      }
      // console.log(this.state.displayedPortfolio)
  }
    

  

}

export default MainContainer;
