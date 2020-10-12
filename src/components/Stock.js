import React, { Fragment } from 'react'

const Stock = (props) => {
  const handleClick = () => {
    props.handleClick(props.stock) 
  }

  return (
    <Fragment>
      <div>
        <div className="card" onClick={handleClick}>
          <div className="card-body">
            <h5 className="card-title">{
                props.stock.name
              }</h5>
            <p className="card-text">
              {props.stock.ticker}: {props.stock.price}
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  )
};

export default Stock