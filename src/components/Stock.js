import React from 'react'

const Stock = (props) => (
  <div>
    <div className="card" onClick={e => {stockClickHandler(e, props)}}>
      <div className="card-body">
        <h5 className="card-title">{
            //Company Name
            props.stock.name
          }</h5>
        <p className="card-text">{
            //ticker: stock price
            props.stock.price
          }</p>
      </div>
    </div>
  </div>
);

function stockClickHandler(e,props){
  let clickedStock = props.stock;
  if(props.parent === "StockContainer"){
    clickedStock.portfolio = true;
    props.togglePortfolio(clickedStock);
  }else if(props.parent === "PortfolioContainer"){
    clickedStock.portfolio = false;
    props.togglePortfolio(clickedStock);
  }
};

export default Stock
