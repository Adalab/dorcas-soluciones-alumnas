import React from 'react';

class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            realClock:{},
            minutes:0,
            seconds:0,
        }
        this.updateClock = this.updateClock.bind(this)
        setInterval(this.updateClock, 1000);
        console.log('this.state',this);
    }
    
    updateClock(){
        const realClock = new Date();
        this.setState({
            realClock: this.state.realClock,
        });
        // if(this.state.seconds < 59){
        //     this.setState({
        //         seconds : this.state.seconds + 1,
        //     });
        // } else if (this.state.seconds === 59){
        //     this.setState({
        //         seconds : 0,
        //         minutes : this.state.minutes + 1,
        //     });
        // }
        console.log('this.state',this.state)
    }

    
    // {
    //     const {minutes, seconds} = this.state;
    //     return (`${minutes} : ${seconds}`);
    // }
    
    render(){
        
        console.log(realClock);
        return ('vaya..');
    }
}

export default Clock;
