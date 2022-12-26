import React from 'react'
import { ListGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

import { useDispatch } from 'react-redux'
import { cartUiActions } from '../../../store/shopping-cart/cartUiSlice';

import '../../../styles/shopping-cart.css'

const Carts = () => {

const dispatch = useDispatch()

const toggleCart = () =>{
    dispatch(cartUiActions.toggle())
}

    return <div className='cart__container'>
        <ListGroup className='cart'>

            <div className='cart__close'>
                <span onClick={toggleCart}><i class='ri-close-fill'></i> </span>
            </div>

            <div className='cart__item-list'>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
            </div>

            <div className="cart__bottom d-flex align-items-center justify-content-between">
                <h6>Subtotal: <span>$45</span></h6>
                <button><Link to='/checkout'>Checkout</Link></button>
            </div>

        </ListGroup>
    </div>
}

export default Carts;