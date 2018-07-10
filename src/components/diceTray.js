import React from 'react';

class DiceTray extends React.Component{
    constructor(props){
        super(props);
        this.rollDice = this.rollDice.bind(this);
        this.dice = [];
    }

    rollDice(){
        this.dice.forEach(d => {
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

    render(){
        return (
            <span className="dice">
                {this.state.value}
            </span>
        );
    }
}

export default DiceTray;