import React, { Component } from 'react';
import './App.css';
import RollSpecParser from './rollSpec.js';

class App extends Component {
constructor(props){
  super(props);
  this.state = {rollState:"emptyCup"};
}

  render() {
    return (
      <div className="App">
        <DiceTray />
      </div>
    );
  }
}

export default App;

class DiceTray extends React.Component {

  submit = (event) => {
    event.preventDefault();

    var parsed = new RollSpecParser(this.state.rawSpec);

    if (!parsed.isValid){
      console.log('Regex validation failed');
      return;
    }

    parsed.specs.forEach(e => {
      console.log(`${e.count} d ${e.size}`);
    });
  }

  specChanged = (event) => {
    this.setState({rawSpec: event.target.value});
  }

  render(){
    return (
      <form onSubmit={this.submit}>
        <label htmlFor="rollSpec">Roll spec</label>
        <input type="text" 
          autoFocus="true"
          id="rollSpec" 
          onChange={this.specChanged} />
        <button type="submit">Fill my cup</button>
      </form>
    )
  }
}