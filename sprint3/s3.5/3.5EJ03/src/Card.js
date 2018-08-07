import 'font-awesome/css/font-awesome.min.css';
 
import React, { Component } from 'react';


class Card extends Component {
    render() {
        
        return (
            <div className= "Wrapper">
            <header className="Article-header">
                <img src={this.props.logo1} className="App-logo" alt="logo" />
                <h1 className="App-title">{this.props.name}</h1>
            </header>
            <article className="Article">
                <p className="App-intro">
                    {this.props.text}
            </p>
                <footer className="Footer">
                    <a href={this.props.link}>leer más...</a>
                    <span className="Heart">{this.props.number}</span>
                    <i className={this.props.type}></i>
                </footer>
            </article>
            </div>
        );
    }
}
export const textLong = "The Count's main role in the show is to educate children about simple mathematical concepts, most notably, as his name implies, counting. The Count loves counting so much that he often will count anything and everything regardless of size or amount, and the other characters can sometimes be quite annoyed by this. In Season 6, for example, he once prevented Ernie from answering a telephone because he wanted to continue counting the number of times the telephone rang. In Episode 3489, he tricked Oscar the Grouch into saying the word 17 times. At another time, while serving as an elevator operator, he selfishly refused to let Kermit the Frog get out at his selected floor so he could count every floor in the building. The Count can occasionally lose his temper when somebody or something interrupts his counting, or feel sad when there is nothing around for him to count, but apart from these, he is typically portrayed as friendly and cheerful."

export default Card;
