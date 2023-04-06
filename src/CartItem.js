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
                        <img className='action-icons' alt="decrease" src="https://cdn-icons-png.flaticon.com/512/1665/1665663.png" />
                        <img className='action-icons' alt="increase" src="https://cdn-icons-png.flaticon.com/512/1665/1665629.png" />
                        <img className='action-icons' alt="delete" src="https://cdn-icons-png.flaticon.com/512/484/484611.png" />

                    </div>
                </div>

            </div >
        );
    }
}

const styles = {
    image: {
        height: 120,
        width: 120,
        borderRadius: 14,
        background: '#777'
    }
}

export default CartItem;