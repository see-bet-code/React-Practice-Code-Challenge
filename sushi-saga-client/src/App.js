import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import SushiForm from './components/SushiForm';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushi: [],
    remaining: 100,
    table: [],
    formDisplay: "none"
  }

  componentDidMount() {
    fetch(API)
    .then(r => r.json())
    .then(obj => this.setState({sushi: obj}))
  }

  handleTable = (sushi) => {
    if (this.state.remaining > sushi.price) {
      this.setState(prevState => ({table: [...prevState.table,sushi],
        remaining: prevState.remaining - sushi.price}))
    } else {
      if (this.state.remaining === sushi.price) {
        this.setState(prevState => ({table: [...prevState.table,sushi],
          remaining: prevState.remaining - sushi.price}))
      }
      console.log("If you ain't got no money, take your broke a** home")
      this.setState({formDisplay: "initial"})
    }
    
  }

  reloadWallet = (val) => {
    this.setState(prevState => ({formDisplay: "none", remaining: prevState.remaining + parseInt(val)}))
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushi={this.state.sushi} handleTable={this.handleTable}/>
        <SushiForm display={this.state.formDisplay} reloadWallet={this.reloadWallet}/>
        <Table remaining={this.state.remaining} table={this.state.table}/>
      </div>
    );
  }
}

export default App;