import React from 'react';


class CartItem extends React.Component {
    constructor() {
        super();
        this.state = {
            price: 999,
            title: 'Smartphone',
            qty: 1,
            img: ''
        }
    }
    render() {
        const { price, title, qty } = this.state;

        return (
            <div className='cart-item'>
                <div className='left-block'>
                    <img alt="" style={styles.image} />
                </div>
                <div className='right-block'>
                    <div style={{ fontSize: 25 }}> {title} </div>
                    <div style={{ color: '#444' }}> Rs {price} </div>
                    <div style={{ color: '#444' }}> Qty: {qty}</div>
                    <div className='cart-item-actions'>
                        {/* {Buttons} */}
                    </div>
                </div>

            </div >
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 14,
        background: '#777'
    }
}

export default CartItem;