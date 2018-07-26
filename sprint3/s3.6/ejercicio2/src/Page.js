import React, {Component} from 'react';
import HalfPage from './HalfPage';
import './Page.css';

class Page extends Component {
  render() {

    return (<div className="Page">
      <HalfPage>
        <h1 className="horizontal-center">Welcome</h1>
        <p>
          No me gusta React!
        </p>
        <p>
          Somos los primos de los children de la madre!
        </p>
      </HalfPage>,
    </div>);

  }
}

export default Page;
