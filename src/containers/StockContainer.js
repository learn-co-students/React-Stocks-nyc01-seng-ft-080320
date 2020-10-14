import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {
  

//  let value = sortStocks(array)=>{

    


//     if(this.props.sort ==="none"){
    
//       this.filterStocks(array)
//     } else if (this.props.sort==="Alphabetically"){
//       let sortedArray =  array.sort((a, b) => {
//         a.name.toUpperCase();
//         b.name.toUpperCase();
      
//         if(a.name < b.name) {return -1;}
//         if(a.name > b.name) { return 1; }
//         return 0;
//       }) 
      // else if (this.props.sort ==="Price"){
      // let sortedArray = array.
    // }

      // console.log(sortedArray)
      // debugger
      // return sortedArray.map((stock, index) => <Stock key={index} {...stock} portfolioClicker={this.props.portfolioClicker}/>)
    

// }



// filterStocks = array => {
//   this.renderStocks(array)


// }

renderStocks = array =>{
  console.log('in render stocks')
  return array.map((stock, index) => <Stock key={index} {...stock} portfolioClicker={this.props.portfolioClicker}/>)
}
  render() {
  

    return (
      <div>
        <h2>Stocks</h2>
        {this.props.api.length>0?
         this.renderStocks(this.props.api):
         <h2>Loading Stocks</h2>
        }
      </div>
    );
  }

}

export default StockContainer;
