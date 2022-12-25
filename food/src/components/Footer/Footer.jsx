import React from 'react'
import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
import logo from '../../assets/images/foodlogo.png'
import '../../styles/footer.css';
import {Link} from 'react-router-dom'

const Footer = () => {
    return<footer className='footer'>
        <Container>
            <Row>
                <Col lg='3' md='4' sm='6'>
                <div className='footer__logo text-start'>
                  <img src={logo} alt='logo ' />
                  <h5>Roscioli</h5>
                  <p>Our history
                    Roscioli is a name that encompasses many situations in a single reality. </p>
                </div>
                </Col>
                <Col lg='3' md='4' sm='6'>
                    <h4 className='footer__title'>Delivery Time</h4>
                    <ListGroup className='delivery__time-list'>
                        <ListGroupItem className='delivery__time-item border-0 ps-0'>
                            <span><b>Sunday-Thursday</b></span>
                            <p>10:00am - 11:00pm</p>
                        </ListGroupItem>
                    </ListGroup>

                    <ListGroup>
                        <ListGroupItem className='delivery__time-item border-0 ps-0'>
                            <span><b>Friday-Saturday</b></span>
                            <p>Off day</p>
                        </ListGroupItem>
                    </ListGroup>

                </Col>
                <Col lg='3' md='4' sm='6'>
                <h4 className='footer__title'>Contact</h4>
                    <ListGroup className='delivery__time-list'>
                    <ListGroupItem className='delivery__time-item border-0 ps-0'>
                            <span><b>Location:</b> Via dei Chiavari, 34</span>
                        </ListGroupItem>

                        <ListGroupItem className='delivery__time-item border-0 ps-0'>
                            <span><b>Phone:</b> +994447-56-35</span>
                        </ListGroupItem>
                    </ListGroup>

                    <ListGroup>
                        <ListGroupItem className='delivery__time-item border-0 ps-0'>
                            <span><b>Email:</b> roscioli@gmail.com</span>
                        </ListGroupItem>
                    </ListGroup></Col>
                <Col lg='3' md='4' sm='6'>
                <h4 className='footer__title'>News Letter</h4>
                <p>Follow us</p>
                <div className='newsletter'>
                    <input type="email" placeholder='Enter your email' />
                    <span>
                        <i class="ri-send-plane-fill"></i>
                    </span>
                </div>
                </Col>
            </Row>

            <Row className=''mt-5>
                <Col lg='6' md='6'>
                    <p className='copyright__text'>Copyright - 2022, website made by Poladli Fatima</p>
                </Col>

                <Col lg='6' md='6'>
                    <div className='social__links d-flex align-items-center gap-4 justify-content-end'>
                        <p className='m-0'>Follow: </p>
                        <span>
                            <Link to='https://ru-ru.facebook.com/'>
                            <i class="ri-facebook-circle-fill"></i>
                            </Link>
                        </span>
                        <span>
                            <Link to='https://www.instagram.com/'>
                            <i class="ri-instagram-line"></i>
                            </Link>
                        </span>
                        <span>
                            <Link to='https://www.youtube.com/'>
                            <i class="ri-youtube-fill"></i>
                            </Link>
                        </span>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
}

export default Footer;
