import React from 'react'
import "./testimonials.css"
import AVTR1 from "../../photo/avatar1.jpg"
// import AVTR2 from "../../photo/avata2.jpg"
// import AVTR3 from "../../photo/avata3.jpg"
// import AVTR4 from "../../photo/avata4.jpg"

// import Swiper core and required modules
import {   Pagination  } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
 
import 'swiper/css/pagination';
 

const Testimonials = () => {
  return (
     <section>
        <h5>Review From Client</h5>
        <h2>Testimonials</h2>

        < Swiper className="container testimonials__container"
            // install Swiper modules
      modules={[  Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
 
        >
            < SwiperSlide className='testimonial'>
                <div className="client__avatar">
                    <img src={AVTR1} alt="avatar One" />
                </div>
                <h5 className='client__name'> Ernest Achiever</h5>
                     <small className='client__review'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error sit sapiente eius
                         consequuntur facere, doloribus tempore eaque magnam autem numq
                        uam laborum, amet ex velit rem quas dolores, temporibus corporis voluptatibus.
                     </small>
            </SwiperSlide>

            <SwiperSlide className='testimonial'>
                <div className="client__avatar">
                    <img src={AVTR1} alt="" />
                     
                </div>
                <h5 className='client__name'> Ernest Achiever</h5>
                     <small className='client__review'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error sit sapiente eius
                         consequuntur facere, doloribus tempore eaque magnam autem numq
                        uam laborum, amet ex velit rem quas dolores, temporibus corporis voluptatibus.
                     </small>
            </SwiperSlide>

            <SwiperSlide className='testimonial'>
                <div className="client__avatar">
                    <img src={AVTR1} alt="" />
                    
                </div>
                <h5 className='client__name'> Ernest Achiever</h5>
                     <small className='client__review'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error sit sapiente eius
                         consequuntur facere, doloribus tempore eaque magnam autem numq
                        uam laborum, amet ex velit rem quas dolores, temporibus corporis voluptatibus.
                     </small>
            </SwiperSlide>
        </Swiper>
     </section>
  )
}

export default Testimonials
