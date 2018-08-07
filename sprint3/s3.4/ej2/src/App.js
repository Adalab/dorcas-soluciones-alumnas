import React, { Component } from 'react';
import './App.css';
import logo from './img.jpg';
import 'font-awesome/css/font-awesome.min.css'

class App extends Component {
  render() {
    const header = <header className="Article-header">
        <img src={logo}                                                                 className="App-logo"                                                        alt="logo" />
        <h1>"Count Von Count"</h1>
        </header>;
        
        const article= <article className="Article">
         <p>
        "The Count's main role in the show is to educate children about simple mathematical concepts, most notably, as his name implies, counting. The Count loves counting so much that he often will count anything and everything regardless of size or amount, and the other characters can sometimes be quite annoyed by this. In Season 6, for example, he once prevented Ernie from answering a telephone because he wanted to continue counting the number of times the telephone rang. In Episode 3489, he tricked Oscar the Grouch into saying the word 17 times. At another time, while serving as an elevator operator, he selfishly refused to let Kermit the Frog get out at his selected floor so he could count every floor in the building. The Count can occasionally lose his temper when somebody or something interrupts his counting, or feel sad when there is nothing around for him to count, but apart from these, he is typically portrayed as friendly and cheerful."
    </p>
        <footer className="Footer">
            <a href="https://www.google.es">leer más...</a>
            <span className="Heart">66</span>
            <i className= "fa fa-heart" ></i>
        </footer>
    </article>
    
    const all= [header, article ]; 
   
console.log(all);
    return (
      <div className="App">
       {all}
      </div>
    );
  }
}

export default App;
