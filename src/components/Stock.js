import React from 'react'

class Stock extends React.Component {
  
    stockHandler = () => {
      this.props.clickHandler(this.props.stock)
    }

  render() {
    return (
      <div>

        <div className="card">
          <div onClick={this.stockHandler} className="card-body">
            <h5 className="card-title">{
                this.props.stock.name
              }</h5>
            <p className="card-text">
                {this.props.stock.ticker} : ${this.props.stock.price}
              </p>
          </div>
        </div>


      </div>
    )
  }
}

export default Stock
