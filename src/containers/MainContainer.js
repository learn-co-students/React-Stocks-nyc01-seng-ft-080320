import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
    state={
        stockList: [],
        myStocks: [],
    }

    componentDidMount(){
        fetch('http://localhost:3000/stocks')
            .then(resp => resp.json())
            .then(data => this.setState({stockList: data}))
    }

    buyStock = (stockObj) => {
        if(this.state.myStocks.some(stock => stock.id === stockObj.id)){
            return
        } else {
            this.setState(prevState => {
                return {
                    myStocks: [...prevState.myStocks, stockObj]
                }
            })
        }
    }

    sellStock = (stockObj) => {
        const newArray = [...this.state.myStocks]
        const stockIndex = newArray.findIndex(stock => stock.id === stockObj.id)
        newArray.splice(stockIndex, 1)
        this.setState({myStocks: newArray})
    }


    render() {
        return (
        <div>
            <SearchBar/>

            <div className="row">
                <div className="col-8">

                <StockContainer stockList={this.state.stockList} clickHandler={this.buyStock}/>

                </div>
                <div className="col-4">

                <PortfolioContainer myStocks={this.state.myStocks} clickHandler={this.sellStock}/>

                </div>
            </div>
        </div>
        );
    }

}

export default MainContainer;
