import React from 'react';

class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            minutes:0,
            seconds:0,
        }
        this.updateClock = this.updateClock.bind(this)
        setInterval(this.updateClock, 1000);
        console.log('this.state',this);
    }
    
    updateClock(){
        if(this.state.seconds < 59){
            console.log('deberia entrar aqui no?');
            this.setState({
                seconds : this.state.seconds + 1,
            });
        } else if (this.state.seconds === 59){
            this.setState({
                seconds : 0,
                minutes : this.state.minutes + 1,
            });
        }
        console.log('this.state',this.state)
    }

    newDate(){
        const {minutes, seconds} = this.state;
        return (`${minutes} : ${seconds}`);
    }
    
    render(){
        return (<p>{this.newDate()}</p>);
    }
}

export default Clock;
