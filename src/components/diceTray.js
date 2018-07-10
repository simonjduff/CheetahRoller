import React from 'react';

class DiceTray extends React.Component{

    render(){
        var specs = this.props.specs || [];
        var dice = [];
        specs.forEach(spec => {
            console.log(`Processing spec ${spec.count}d${spec.size}`);
            for (var i =0;i<spec.size;i++){
                dice.push(spec.size);
            }
        });

        return (
            <div>
                Total {dice.length}
                <div>
                    {(dice).map((size, index) => {
                        return <Dice key={index} size={size} />
                    })}
                </div>
            </div>
        );
    }
}

class Dice extends React.Component{
    render(){
        return (
            <span class="dice">
                d{this.props.size}
            </span>
        );
    }
}

export default DiceTray;