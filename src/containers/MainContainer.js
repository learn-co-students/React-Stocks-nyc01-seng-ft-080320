import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
    state={
        stockList: []
    }

    componentDidMount(){
        fetch('http://localhost:3000/stocks')
            .then(resp => resp.json())
            .then(data => this.setState({stockList: data}))
    }


    render() {
        
        return (
        <div>
            <SearchBar/>

            <div className="row">
                <div className="col-8">

                <StockContainer stockList={this.state.stockList}/>

                </div>
                <div className="col-4">

                <PortfolioContainer/>

                </div>
            </div>
        </div>
        );
    }

}

export default MainContainer;
