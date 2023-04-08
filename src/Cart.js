import React from 'react';
import CartItem from './CartItem';


class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [{
                price: 19999,
                title: 'Watch',
                qty: 5,
                img: '',
                id: 1
            },
            {
                price: 58999,
                title: 'Smartphone',
                qty: 10,
                img: '',
                id: 2
            },
            {
                price: 10999,
                title: 'Headphone',
                qty: 8,
                img: '',
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

    render() {
        const { products } = this.state;

        return (
            <div className='cart'>
                {
                    products.map((product) => {
                        return (
                            <CartItem
                                product={product}
                                key={product.id}
                                onIncreaseQuantity={this.handleIncreaseQty}
                                onDecreaseQuantity={this.handleDecreaseQty}
                                onDeleteItem={this.handleDeleteItem}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

export default Cart;