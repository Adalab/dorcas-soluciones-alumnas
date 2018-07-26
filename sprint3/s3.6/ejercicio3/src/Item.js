import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Item.css';


class Item extends React.Component {
  render() {
    console.log('hola');
    return (
      <div className="item">
        <h5 className="quantity">{ this.props.quantity }</h5>
        <div>
          <h5>{ this.props.name }</h5>
          <h6 className="text-muted">{ this.props.description }</h6>
        </div>
        <div className="badge badge-info">{ this.props.category }</div>
        <h5 className="price">{ this.props.price }€</h5>
      </div>
    );
  }
}


Item.propTypes =  {
  name: PropTypes.string,
  price: PropTypes.number
}
// Item.defaultProps = {
//   description : 'No hay descripción'
// };

export default Item;
