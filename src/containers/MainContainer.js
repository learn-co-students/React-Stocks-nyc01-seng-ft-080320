import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
    state={
        stockList: [],
        myStocks: [],
        filterVal: "",
        sortVal: ""
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

    filterHandler = (value) => {
        this.setState({filterVal: value})
    }

    sortHandler = (value) => {
        this.setState({sortVal: value})
    }

    filterOrSortStocks = () => {
        if (this.state.filterVal.length > 0){
            return this.state.stockList.filter(stock => stock.type.includes(this.state.filterVal))
        } else {
            return this.state.stockList
        }
    }


    render() {
        return (
        <div>
            <SearchBar 
                filterVal={this.state.filterVal} 
                filterHandler={this.filterHandler}
                sortVal={this.state.sortVal}
                sortHandler={this.sortHandler}
            />
            <div className="row">
                <div className="col-8">

                <StockContainer stockList={this.filterOrSortStocks()} clickHandler={this.buyStock}/>

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
