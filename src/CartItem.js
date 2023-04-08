import React from 'react';


class CartItem extends React.Component {
    deleteItem = () => {
        console.log(this);
    }

    render() {
        const { price, title, qty } = this.props.product;

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
                        <img className='action-icons' onClick={() => { this.props.onIncreaseQuantity(this.props.product) }} alt="increase" src="https://cdn-icons-png.flaticon.com/512/1665/1665629.png" />
                        <img className='action-icons' onClick={() => { this.props.onDecreaseQuantity(this.props.product) }} alt="decrease" src="https://cdn-icons-png.flaticon.com/512/1665/1665663.png" />
                        <img className='action-icons' onClick={this.deleteItem} alt="delete" src="https://cdn-icons-png.flaticon.com/512/484/484611.png" />
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