
import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super()
    this.state={
     count:0,
     college:"svecw"
    }
  }
  increment=()=>{
    console.log('incre')
    this.setState({count:this.state.count+1})
  }
  decrement=()=>{
    console.log('decre')
    this.setState({count:this.state.count-1})
  }
  componentDidMount(){
    setInterval(()=>{
      this.setState({count: this.state.count+1})
    },1000)
  }
  componentDidUpdate(){
    console.log('updating')
    if(this.state.count===5000)
    {
      alert('Exceeded')
      this.setState({count:0})
    }
  }
  componentWillUnmount()
  {
    console.log('unmounting')
  }
  render() {
    return (
      <div>
        <h1>count:{this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>decrement</button>
      <h1>{this.state.college}</h1>
      </div>
    )
  }
}

