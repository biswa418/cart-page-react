import React from 'react';


const CartItem = (props) => {
    const { price, title, qty } = props.product;

    const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteItem } = props;

    return (
        <div className='cart-item'>
            <div className='left-block'>
                <img src={product.img} alt="" style={styles.image} />
            </div>
            <div className='right-block'>
                <div style={{ fontSize: 25 }}> {title} </div>
                <div style={{ color: '#444' }}> Rs {price} </div>
                <div style={{ color: '#444' }}> Qty: {qty}</div>
                <div className='cart-item-actions'>
                    {/* {Buttons} */}
                    <img className='action-icons' onClick={() => { onIncreaseQuantity(product) }} alt="increase" src="https://cdn-icons-png.flaticon.com/512/1665/1665629.png" />
                    <img className='action-icons' onClick={() => { onDecreaseQuantity(product) }} alt="decrease" src="https://cdn-icons-png.flaticon.com/512/1665/1665663.png" />
                    <img className='action-icons' onClick={() => { onDeleteItem(product.id) }} alt="delete" src="https://cdn-icons-png.flaticon.com/512/484/484611.png" />
                </div>
            </div>

        </div >
    );
}

const styles = {
    image: {
        height: 120,
        width: 120,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        borderRadius: 14,
        background: '#777'
    }
}

export default CartItem;