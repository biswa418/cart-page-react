import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [{
        price: 19999,
        title: 'Watch',
        qty: 2,
        img: 'https://images.pexels.com/photos/5081914/pexels-photo-5081914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        id: 1
      },
      {
        price: 30999,
        title: 'Smartphone',
        qty: 1,
        img: 'https://images.unsplash.com/flagged/photo-1594344141311-8ea00ba55612?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        id: 2
      },
      {
        price: 10999,
        title: 'Headphone',
        qty: 2,
        img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        id: 3
      }
      ]
    }
  }

  handleIncreaseQty = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty++;

    this.setState({
      products // shorthand for products: products
    });
  }

  handleDecreaseQty = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }

    products[index].qty--;

    this.setState({
      products // shorthand for products: products
    });
  }

  handleDeleteItem = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => id !== item.id);

    this.setState({
      products: items
    });
  }

  getCartCount = () => {
    const { products } = this.state;
    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    })

    return count;
  }

  totalPrice = () => {
    const { products } = this.state;
    let price = 0;

    products.map((product) =>
      price += product.qty * product.price
    );

    return price;
  }

  render() {
    const { products } = this.state;

    return (
      <div className="App">
        <Navbar
          count={this.getCartCount()}
        />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQty}
          onDecreaseQuantity={this.handleDecreaseQty}
          onDeleteItem={this.handleDeleteItem}
        />

        <div style={{ padding: 10, fontSize: 25 }}>
          Total - {this.totalPrice()}
        </div>
      </div>
    );
  }
}

export default App;
