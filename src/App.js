import React, { Component } from 'react';
import './App.css';
import SpecQuestion from './components/specQuestion';

class App extends Component {
constructor(props){
  super(props);
  this.state = {rollState:"emptyCup"};
}

  render() {
    return (
      <div className="App">
        <SpecQuestion />
      </div>
    );
  }
}

export default App;