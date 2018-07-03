import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DiceCup />
      </div>
    );
  }
}

export default App;

class DiceCup extends React.Component{
  submit(event){
    console.log('Event fired');
    event.preventDefault();
  }

  render(){
    return (
      <form onSubmit={this.submit}>
        <label for="rollSpec">Roll spec</label>
        <input type="text" id="rollSpec" />
        <button type="submit">Fill my cup</button>
      </form>
    )
  }
}