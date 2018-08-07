import React, { Component } from 'react';



class HalfPage extends Component {
  render() {
    return (
      <div>
     { this.props.children }
       
      </div>
    );
  }
}

export default HalfPage;
