import React, { Component } from 'react'

export default class Stock extends Component {

  
  render() {

    const {stock,handleClicks,click} = this.props   
    
    return (
      
      <div className="card" onClick={handleClicks} data-click={click}> 
        <div className="card-body" id={stock.id} data-click={click}>
          <h5 className="card-title" id={stock.id} data-click={click}>{
              stock.name
            }</h5>
          <p className="card-text" id={stock.id} data-click={click}>{
              stock.price
            }</p>
        </div>
      </div>
  
  
    )
  }
}

