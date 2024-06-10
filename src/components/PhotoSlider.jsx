import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import slider1 from "/src/assets/slider1.png";
import slider2 from "/src/assets/slider2.png";
import slider3 from "/src/assets/slider3.png";
import slider4 from "/src/assets/slider4.png";

export default function PhotoSlider() {
    return (
        <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            className='swiper-container'
            // className="mb-[165px] lg:mb-[250px] px-[50px] lg:h-[424px] relative z-30"
            spaceBetween={50}
            slidesPerView={3}

        >
            <SwiperSlide>
                <img src={slider1} alt="Slider 2" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={slider2} alt="Slider 2" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={slider3} alt="Slider 2" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={slider4} alt="Slider 2" />
            </SwiperSlide>
            <div className='slider-controler'>
                <div className='slider-button-prev slider-arrow'>
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
            </div>

        </Swiper>
    );
}
