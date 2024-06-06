import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slider1 from "../assets/slider1.png"
import slider2 from "../assets/slider2.png"
import slider3 from "../assets/slider3.png"

export default function PhotoSlider({ ...props }) {
    const settings = {
        arrows: false, // Прибрати кнопки "вліво-вправо"
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings} className="mb-[165px] px-[50px]">
            <div>
                <img src={slider1} alt="" />
            </div>
            <div>
                <img src={slider2} alt="" />
            </div>
            <div>
                <img src={slider3} alt="" />
            </div>
        </Slider>
    );
}
