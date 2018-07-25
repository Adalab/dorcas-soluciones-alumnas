import React, { Component } from 'react';
import Item from './Item';


class ItemList extends React.Component {
  render() {
    return (
      <ul className="item-list">
        <li>
          <Item
            name="Cereales con chocolate"
            description="Cereales rellenos de chocolate"
            quantity={2}
            category="Cereales"
            price={5}
          />
        </li>
        <li>
          <Item
            name="Hamburguesa con queso"
            quantity={1}
            category="Fast-food"
            price={15}
          />
        </li>
        <li>
          <Item
            name="Agua mineral"
            description="Agua de un charco del Himalaya"
            quantity={2}
            category="Bebida"
            price={5}
          />
          </li>
           <li>
            <Item
            name="Macarrones"
            description="Macarrones italianos de la nona"
            quantity={2}
            category="Alimentos"
            price={1}
          />
        </li>
      </ul>
    );
  }
}
export default ItemList;
