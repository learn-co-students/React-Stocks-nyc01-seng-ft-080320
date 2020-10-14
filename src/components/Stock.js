import React from 'react'

const Stock = (props) => {

  const getObject = () =>{
    let stock=props
    props.portfolioClicker(stock)
  }
return(
  <div>

    <div className="card">
      <div className="card-body" onClick={getObject}>
        <h5 className="card-title">
           {props.name}
          </h5>
        <p className="card-text">
            {props.ticker}: {props.price}
          </p>
      </div>
    </div>


  </div>
)
};

export default Stock
