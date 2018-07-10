import React from 'react';

class DiceTray extends React.Component{
    constructor(props){
        super(props);
        this.rollDice = this.rollDice.bind(this);
        this.rerollOnes = this.rerollOnes.bind(this);
        this.dice = [];
    }

    rollDice(){
        this.dice.forEach(d => {
            d.roll();
        });
    }

    rerollOnes(){
        var ones = this.dice.filter(d => d.value === 1) || [];
        ones.forEach(d => {
            d.roll();
        });
    }

    render(){
        var specs = this.props.specs || [];
        var dice = [];
        specs.forEach(spec => {
            for (var i =0;i<spec.count;i++){
                dice.push(spec.size);
            }
        });

        return (
            <div>
                Total {dice.length}
                <div>
                    {(dice).map((size, index) => {
                        return <Dice key={`${index}-${size}`} size={size} ref={d => {this.dice.push(d)}} />
                    })}
                </div>
                <button onClick={this.rollDice}>Roll</button>
                <button onClick={this.rerollOnes}>Reroll Ones</button>
            </div>
        );
    }
}

class Dice extends React.Component{
    constructor(props){
        super(props);
        this.state = {value:this.props.size};
    }

    roll(){
        const min = 1;
        this.setState({value: Math.floor(Math.random() * (this.props.size - min +1)) + min});
    }

    get value(){
        return this.state.value;
    }

    render(){
        return (
            <span className="dice">
                {this.state.value}
            </span>
        );
    }
}

export default DiceTray;