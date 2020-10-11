import React from 'react'

function Stock(props){
    const localClickHandler = () => {
        props.clickHandler(props.stock)
    }
   return(
  <div onClick={localClickHandler}>

    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{
            props.stock.name
          }</h5>
        <p className="card-text">{
            `${props.stock.ticker}: ${props.stock.price}`
          }</p>
      </div>
    </div>


  </div>
   )
};

export default Stock
