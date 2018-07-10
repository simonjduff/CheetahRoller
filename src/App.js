import React, { Component } from 'react';
import './App.css';
import SpecQuestion from './components/specQuestion';
import DiceTray from './components/diceTray';

class App extends Component {
  constructor(props){
    super(props);
    this.handleSpecDefined = this.handleSpecDefined.bind(this);
    this.state = {rollState:"emptyCup"};
  }

  handleSpecDefined(specs){
    this.setState({specs: specs});
  }

  render() {
    return (
      <div className="App">
        <SpecQuestion onSpecDefined={this.handleSpecDefined} />
        <DiceTray specs={this.state.specs} />
      </div>
    );
  }
}

export default App;