import React from 'react'
import "./testimonials.css"
import AVTR1 from "../../assets/me-about.png"
import AVTR2 from "../../assets/me-about.png"
import AVTR3 from "../../assets/me-about.png"

// import Swiper core and required modules
import { Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


const data = [
    {
        id: 1,
        avatar: AVTR1,
        name: "Some Name",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut\n" +
            "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
    },
    {
        id: 2,
        avatar: AVTR2,
        name: "Some Name 2",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut\n" +
            "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
    },
    {
        id: 3,
        avatar: AVTR3,
        name: "Some Name 3",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut\n" +
            "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
    }
]

const Testimonials = () => {
    return (
        <section id={"testimonials"}>
            <h5>Review From Clients</h5>
            <h2>Testimonials</h2>

            <Swiper className={"container testimonials__container"}
                // install Swiper modules
                    modules={[Navigation]}
                    spaceBetween={40}
                    slidesPerView={1}
                    navigation={true}>
                {
                    data.map(({id, avatar, name, review}) => {
                        return (
                            <SwiperSlide key={id} className={"testimonial"}>
                                <div className={"client__avatar"}>
                                    <img src={avatar} />
                                </div>
                                <h5 className={"client__name"}>{name}</h5>
                                <small className={"client__review"}>{review}</small>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </section>
    )
}

export default Testimonials