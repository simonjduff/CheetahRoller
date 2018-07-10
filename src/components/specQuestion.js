import React from 'react';
import RollSpecParser from './rollSpec';

class SpecQuestion extends React.Component {
  constructor(props){
    super(props);
    this.specChanged = this.specChanged.bind(this);
    this.submit = this.submit.bind(this);
  }

    submit(event) {
      event.preventDefault();
  
      var parsed = new RollSpecParser(this.state.rawSpec);
  
      if (!parsed.isValid){
        console.log('Regex validation failed');
        return;
      }
  
      this.props.onSpecDefined(parsed.specs);
    }
  
    specChanged(event) {
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

  export default SpecQuestion;