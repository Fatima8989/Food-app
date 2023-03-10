import React, {useState, useEffect} from 'react'
import Helmet from '../components/Helmet/Helmet.js'
import {Container, Row, Col} from 'reactstrap'

import heroImg from '../assets/images/santo.png'
import '../styles/hero-section.css'

import {Link} from 'react-router-dom'
import Category from '../components/UI/category/Category.jsx'
import '../styles/home.css'
import featureImg01 from '../assets/images/service-01.png'
import featureImg02 from '../assets/images/service-02.png'
import featureImg03 from '../assets/images/service-03.png'

import products from '../assets/fake-data/products.js'
import ProductCard from '../components/UI/product-card/ProductCard.jsx'

import networkImg from '../assets/images/network2.png'

import TestimonialSlider from '../components/UI/slider/Testimonial.jsx'

const featureData = [
    {
        title: 'Quick Delivery',
        imgUrl: featureImg01,
        desc:'We make lives easier with our convenient and efficient delivery services',
    },
    {
        title: 'Super Dine In',
        imgUrl: featureImg02,
        desc:'Our food is excellent, absolutely delicious, best breakfast and pizza and staff is so friendly.',
    },
    {
        title: 'Easy Pick Up',
        imgUrl: featureImg03,
        desc:'Very professional and the booking was very easy, good communication',
    },
]
const Home = () => {

    const [category, setCategory] = useState('All')
    const [allProducts, setAllProducts] = useState(products)

      useEffect(() => {
        if (category === "ALL") {
          setAllProducts(products);
        }

        if(category === 'HAMBURGER') {
            const filteredProducts = products.filter(item => item.category === 'Hamburger')

            setAllProducts(filteredProducts)
        }

        if(category === 'PIZZA') {
            const filteredProducts = products.filter(item => item.category === 'Pizza')

            setAllProducts(filteredProducts)
        }

        if(category === 'MEXICAN') {
            const filteredProducts = products.filter(item => item.category === 'Mexican')

            setAllProducts(filteredProducts)
        }

        if(category === 'ASIAN') {
            const filteredProducts = products.filter(item => item.category === 'Asian')

            setAllProducts(filteredProducts)
        }


        
    }, [category])


    return (
    <Helmet title ='Home'>
        <section>
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <div className='hero__content'>
                            <h5 className='mb-3'>Easy way to make an order</h5>
                            <h1 className='mb-4 hero__title'><span>Quality,</span> you can taste at<span> your door</span></h1>
                            <p className='hero__order'>Order the delivery of the food you want to your home or office. Visit the site, enter your address and enjoy delicious food.</p>

                            <div className='hero__btns d-flex align-items-center 
                            gap-5 mt-4'>
                                <button className='order__btn d-flex align-items-center justify-content-between'>Order now
                                <i class="ri-arrow-right-s-line"></i>
                                </button>
                                <button className='all__foods-btn'>
                                    <Link to='/foods'>See all foods</Link>
                                </button>
                            </div>

                            <div className='hero__service d-flex align-items-center gap-5 mt-5'>
                                <p className='d-flex align-items-center gap-2'><span className='shipping__icon'><i class="ri-roadster-fill"></i></span>
                                No shipping charge</p>

                                <p className='d-flex align-items-center gap-2'><span className='shipping__icon'>  <i class="ri-shield-check-line"></i></span>100% secure checkout</p>
                            </div>
                        </div>
                    </Col>

                    <Col lg='6' md='6'>
                        <div className='hero__img'>
                            <img src={heroImg} alt="hero-img" className='w-100' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        <section className='pt-0'>
            <Category />
        </section>

        <section>
            <Container>
                <Row>
                 
        
                    {
                        featureData.map((item, index) => (
                            <Col lg='4' md='4' key={index}>
                                <div className='feature__item text-center px-5 py-3'>
                                    <img src={item.imgUrl} alt='feature-img' className='w-25 mb-3'/>
                                    <h5 className='fw-bold mb-3 '>{item.title}</h5>
                                    <p>{item.desc}</p>
                                </div>
                            </Col>
                        ))
                    }

                    <Col lg='4' md='4'>
                        <div className='feature__item'>

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <section>
            <Container>
                <Row>
                    <Col lg='12' className='text-center'>
                        <h2>Popular Foods</h2>
                    </Col>

                    <Col lg='12'>
                        <div className="food__category d-flex align-items-center justify-content-center gap-4">
                            <button className='all__btn foodActive' onClick={() => setCategory('ALL')}>All</button>
                            <button className='d-flex align-items-center gap-2' onClick={() => setCategory('HAMBURGER')} >Hamburger</button>
                            <button className='d-flex align-items-center gap-2' onClick={() => setCategory('PIZZA')} >Pizza</button>
                            <button className='d-flex align-items-center gap-2' onClick={() => setCategory('MEXICAN')} >Mexican</button>
                            <button className='d-flex align-items-center gap-2' onClick={() => setCategory('ASIAN')} >Asian</button>

                        </div>
                    </Col>
                    {
                        allProducts.map(item =>( 
                        <Col lg='3' md='4' sm='6' xs='6' key={item.id} className='mt-5'>
                          <ProductCard item={item} />
                        </Col>
                     ))
                    
                    }
                                        
                </Row>
            </Container>
        </section>

        

        <section>
            <Container>
                <Row>
                <Col lg='6' md='6'>
                    <div className='testimonial'>
                        <h5 className='testimonial__subtitle  mb-4'>Social Media Testimonial</h5>
                        <TestimonialSlider className='testimonial__txt'/>
                        </div>

                    </Col>

                    <Col lg='6' md='6'>
                        <img src={networkImg} alt="testimonial-img" className='social__img' />
                    </Col>

                   
                </Row>
            </Container>
        </section>
    </Helmet>
    )
}


export default Home;
