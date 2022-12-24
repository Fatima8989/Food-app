import React from 'react';
import {Container, Row, Col} from 'reactstrap'

import categoryImg01 from '../../../assets/images/burger1.png'
import categoryImg02 from '../../../assets/images/pizza2.png'
import categoryImg03 from '../../../assets/images/taco3.png'
import categoryImg04 from '../../../assets/images/ramen4.png'
import '../../../styles/category.css'

const categoryData = [
    {
        display: 'Hamburger',
        imgUrl: categoryImg01
    },
    {
        display: 'Pizza',
        imgUrl: categoryImg02
    },
    {
        display: 'Mexican',
        imgUrl: categoryImg03
    },
    {
        display: 'Asian',
        imgUrl: categoryImg04
    }
]


const Category = () => {
    return <Container>
        <Row>
            {
                categoryData.map((item,index) => (
                    <Col lg='3' md='4'>
                    <div className='category__item d-flex align-items-center justify-content-center gap-3'>
                        <div className="category__img">
                            <img src={item.imgUrl} alt="category__item" />
                        </div>
                        <h6>{item.display}</h6>
                    </div>
                    </Col>
                ))
            }
        </Row>
    </Container>

}

export default Category