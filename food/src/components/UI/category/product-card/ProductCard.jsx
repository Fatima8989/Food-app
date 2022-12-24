import React from 'react'
import productImg from '../../../assets/images/product_2.1.jpg'
import {Link} from 'react-router-dom'


const ProductCard = () => {
    return <div className='product__item'>
        <div>
           <img src="{productImg}" alt="product-img" />
        </div>

        <div className='product__content'>
            <h5><Link>Hamburger</Link></h5>
            <div>
                <span className='product__price'>$12.00</span>
                <button className='addToCArt__btn'>Add to CArt</button>
            </div>
        </div>
    </div>
}


export default ProductCard