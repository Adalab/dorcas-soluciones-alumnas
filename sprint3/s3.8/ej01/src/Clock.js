import React from 'react';

class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        };

        this.updateClock = this.updateClock.bind(this)
        setInterval(this.updateClock, 1000);
        // console.log('this.state',this);
    }
    
    updateClock(){

        this.setState({
            date: new Date()
        });
        console.log('this.state',this.state.date)
        console.log('this.state.date.toDateString()',this.state.date.toDateString())
    }

    render(){
        return (
            <div>
                <p>{`Hora local: ${this.state.date.toLocaleTimeString()}`}</p>
                <p>{`Fecha: ${this.state.date.toDateString()}`}</p>
            </div>
        );
    }
}

export default Clock;
