import React from "react";
import Cart from "./Cart";
import Navbar from "../Navbar";
import { collection, onSnapshot, addDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from '../config/firebase';
import Loader from "./Loader";
import '../assets/button.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      isLoading: true
    }
    this.unsubscribe = null;
  }

  async componentDidMount() {
    // await getDocs(collection(db, "products"))
    //   .then((snapshot) => {
    //     const newData = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

    //     this.setState({
    //       products: newData,
    //       isLoading: false
    //     });
    //   });

    this.unsubscribe = onSnapshot(collection(db, "products")
      , (snapshot) => {
        const newData = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

        this.setState({
          products: newData,
          isLoading: false
        });
      });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleIncreaseQty = async (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    // products[index].qty++;

    // this.setState({
    //   products // shorthand for products: products
    // });

    try {
      await updateDoc(doc(db, 'products', products[index].id), {
        qty: products[index].qty + 1
      });
    } catch (err) {
      console.log('Error', err);
    }
  }

  handleDecreaseQty = async (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }

    // products[index].qty--;

    // this.setState({
    //   products // shorthand for products: products
    // });

    try {
      await updateDoc(doc(db, 'products', products[index].id), {
        qty: products[index].qty - 1
      });
    } catch (err) {
      console.log('Error', err);
    }
  }

  handleDeleteItem = async (id) => {
    // const { products } = this.state;
    // const items = products.filter((item) => id !== item.id);

    // this.setState({
    //   products: items
    // });

    try {
      await deleteDoc(doc(db, 'products', id));
    } catch (err) {
      console.log('Error', err);
    }
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

  addanItem = async () => {
    try {
      const docRef = await addDoc(collection(db, "products"), {
        price: 21999,
        qty: 1,
        title: 'Washing Machine',
        img: 'https://whirlpoolindia.vtexassets.com/arquivos/ids/164386/Xpert-care-Silver-lid-open-O3-6.5kg_1500x1500.jpg?v=638000290210600000'
      });
    } catch (err) {
      console.log('Error in adding', err);
    }
    // console.log("Document written with ID: ", docRef.id);
  }

  render() {
    const { products, isLoading } = this.state;

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
        {isLoading && <Loader />}

        {!isLoading &&
          <>
            <div style={{ padding: 10, fontSize: 25 }}>
              Total - {this.totalPrice()}
            </div>

            <button className="btn-grad" onClick={this.addanItem}>Add an Item</button>
          </>
        }
      </div>
    );
  }
}

export default App;