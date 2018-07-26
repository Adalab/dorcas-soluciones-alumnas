import React, {Component} from 'react';
import './HalfPage.css';

class HalfPage extends React.Component {
  render() {

    return (
      <div>
      <div className="HalfPage">
        {this.props.children}
      </div>
      <div className="HalfPage">
        {this.props.children}
      </div>
    </div>);
  }
}

export default HalfPage;
