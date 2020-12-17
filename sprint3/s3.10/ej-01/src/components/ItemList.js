import React, {Component} from 'react';
import Item from './Item';
import CategoryButton from './CategoryButton';
import './ItemList.css';

const items = [
  {
    name: "Cereales con chocolate",
    description: "Cereales rellenos de chocolate",
    quantity: 2,
    category: "Cereales",
    price: 5
  }, {
    name: "Hamburguesa con queso",
    description: "Hamburguesa rica y saludable",
    quantity: 1,
    category: "Fast-food",
    price: 15
  }, {
    name: "Agua mineral",
    description: "Agua de un charco del Himalaya",
    quantity: 2,
    category: "Bebida",
    price: 5
  }
];

let itemFromCategory = items;


class ItemList extends Component {
  constructor (props) {

    super(props);
    this.handleCategoryButton = this.handleCategoryButton.bind(this);
  }

  handleCategoryButton (event) {

    itemFromCategory = itemFromCategory.filter(item => item.category === "Bebida");
    this.forceUpdate();
    console.log(itemFromCategory);
  }

  render() {

    return (
      <div className="wrapper">
      <ul className="item-list">
      {
        itemFromCategory.map(function(items,index) {
          return (
          <li key={index}>

            <Item name={items.name}
                  description={items.description}
                  quantity={items.quantity}
                  category={items.category}
                  price={items.price}/>

          </li>
        )
        })
      }
    </ul>

<CategoryButton category='Bebida' actionTo= { this.handleCategoryButton }/>
</div>

);
  }
}

export default ItemList;
