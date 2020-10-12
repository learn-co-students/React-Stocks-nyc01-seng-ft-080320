import React, { Component } from 'react'



export default class Stock extends Component {
  
  handleClick = () => {
    this.props.handlePortfolio(this.props.stock,this.props.type)
  }

  render() {
    
    return (
      <div onClick={this.handleClick}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            {this.props.stock.name}
          </h5>
          <p className="card-text">
            ticker: {this.props.stock.price}
          </p>
        </div>
      </div>
    </div>
    )
  }
}

