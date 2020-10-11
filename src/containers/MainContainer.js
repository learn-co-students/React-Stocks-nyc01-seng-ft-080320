import React, { Component } from 'react';
import StockContainer from './StockContainer';
import PortfolioContainer from './PortfolioContainer';
import SearchBar from '../components/SearchBar';

class MainContainer extends Component {
	state = {
		api: [],
		alphabetically: false,
		price: false,
		filterOption: '',
		likedStocks: []
	};

	componentDidMount() {
		fetch('http://localhost:3000/stocks').then((resp) => resp.json()).then((stocks) => {
			this.setState({
				api: stocks
			});
		});
	}

	radioChangeHadler = (e) => {
		if (e.target.value === 'Alphabetically') {
			this.setState({
				alphabetically: true,
				price: false
			});
		} else if (e.target.value === 'Price') {
			this.setState({
				alphabetically: false,
				price: true
			});
		}
	};

	filterHandler = (e) => {
		this.setState({
			filterOption: e.target.value
		});
	};

	stockClickHandler = (stockObj) => {
		if (!this.state.likedStocks.includes(stockObj)) {
			this.setState({
				likedStocks: [ ...this.state.likedStocks, stockObj ]
			});
		}
	};

	removeFromPortfolio = (stockObj) => {
		const newList = () => {
			return this.state.likedStocks.filter((stock) => {
				return stock.id !== stockObj.id;
			});
		};
		this.setState({
			likedStocks: newList()
		});
    };
    filteredStocks = () => {
        if(this.state.alphabetically === false && this.state.price === false){
            return this.state.api
        } else if(this.state.alphabetically === true){
            return this.state.api.sort((a, b) => {
                if(a.name < b.name){
                    return -1;
                }
                if(b.name < a.name){
                    return 1;
                }
                return 0
            })
        } else if(this.state.price === true){
            return this.state.api.sort((a, b) => {
                return b.price - a.price
            })
        } 
    }
    categoryFiltered = (filteredWord) => {
        if(this.state.filterOption === ''){
             return this.filteredStocks()
        } else {
            return this.filteredStocks().filter(stock => {
                return stock.type === filteredWord
            })
        }
    }
  

	render() {
		return (
			<div>
				<SearchBar
					filterHandler={this.filterHandler}
					changeHandler={this.radioChangeHadler}
					alphabetically={this.state.alphabetically}
					price={this.state.price}
				/>

				<div className="row">
					<div className="col-8">
						<StockContainer clickHandler={this.stockClickHandler} stocks={this.categoryFiltered} alphabetically={this.state.alphabetically} price={this.state.price} filter={this.state.filterOption}/>
					</div>
					<div className="col-4">
						<PortfolioContainer clickHandler={this.removeFromPortfolio} stocks={this.state.likedStocks} filter={this.state.filterOption} />
					</div>
				</div>
			</div>
		);
	}
}

export default MainContainer;
