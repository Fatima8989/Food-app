import React from 'react';
import Slider from 'react-slick'

import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";

import '../../../styles/slider.css'
const Testimonial = () => {
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 3000,
        slideToShow: 1,
        slideToScroll: 1,
    }

    return (
        <Slider {...settings} className='slider__dsg'>
            <div>
                <p className='review__text'>
                This restaurant is one of the famous restaurant in the city, hence it seems always full of customers.It's worth the wait, the foods and drinks are delicious, the side dishes with a little sweetness and main course are really spicy but I love that taste a lot.
                </p>
        
            <div className='slider__content d-flex align-items-center gap-3'>
                <img src={ava01} alt="avatar" className='w-25 rounded '/>
                <h6>Joe Smith</h6>
            </div>
            </div>

            <div>
                <p className='review__text'>
                Came for a celebration with my husband. We loved Mexican culinary . I has been there 3 times before and the experience was amazing. The mains were fantastic which were amazing with lots of flavours and side dishes are quite good. 
                </p>
        
            <div className='slider__content d-flex align-items-center gap-3'>
                <img src={ava02} alt="avatar" className='w-25 rounded '/>
                <h6>Becca Williams</h6>
            </div>
            </div>

            <div>
                <p className='review__text'>
                I decided to try out the restaurant near the The Pantheon monument where I work. It always smells good when I go to work. Once, I had lunch there, and I went for pizza cause it's my favorite dish.
                </p>
        
            <div className='slider__contentd-flex align-items-center gap-3'>
                <img src={ava03} alt="avatar" className='w-25 rounded ' />
                <h6>Liam Stevens</h6>
            </div>
            </div>
        </Slider>
    )
}

export default Testimonial;