import React, { Component } from 'react';
import './CategoryButton.css';

class CategoryButton extends Component {

  render () {
    console.log(this.props);
    return (
  <button type="button" name="button" onClick={ this.props.actionTo }>Bebida</button>
    );
  }
}

export default CategoryButton;
