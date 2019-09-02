import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state={
    sushi : [],
    startInd : 0,
    totalEaten: [],
    money : 100
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(sushis =>  this.setState({
      sushi : sushis })
    )
  }

    next4 = () => {
    this.setState({
      startInd : this.state.startInd + 4
    })
  }

    totalEatenIncrease = () => {
    this.setState ({
      totalEaten: [...this.state.totalEaten , 1]
    })
  }

  totalAmount = (price) => {
    this.setState({
      money: this.state.money - price
    })
  }

  render() {
    const {sushi , startInd, totalEaten, money} = this.state
    return (
      <div className="app">
        <SushiContainer sushis={sushi}
          start={startInd}
          next4 ={this.next4}
          totalEaten = {this.totalEatenIncrease}
          money = {this.totalAmount}
          usermoney={money}
          />
        <Table totalEaten = {totalEaten} money = {money} />
      </div>
    );
  }
}

export default App;
