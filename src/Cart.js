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

    render() {
        const { products } = this.state;

        return (
            <div className='cart'>
                {products.map((product) => {
                    return (
                        <CartItem
                            product={product}
                            key={product.id}
                        />
                    )

                })}
            </div>
        )
    }
}

export default Cart;