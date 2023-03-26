import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Lazy, Pagination } from "swiper";
import "swiper/scss";
import "./mainSlider.scss";
import preloader from "../../icons/logoFooter.png";

const MainSlider = () => {
    const slides = [
        "https://i.ibb.co/wy47BMt/03.jpg",
        "https://i.ibb.co/Dw1h7x8/01.jpg",
        "https://i.ibb.co/PCNrHpn/02.jpg"
    ];
    return (
        <Swiper
            className="main-slider"
            modules={[Lazy, Pagination]}
            pagination={{ clickable: true }}
            lazy={{ loadPrevNext: true }}
            centeredSlides={true}
            loop
            breakpoints={{
                992: {
                    slidesPerView: 1.5,
                    spaceBetween: 30
                },
                480: {
                    slidesPerView: 1.1,
                    spaceBetween: 20
                },
                320: {
                    slidesPerView: 1.1,
                    spaceBetween: 10
                }
            }}
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index} className="main-slider__slide">
                    <div className="main-slider__img">
                        <img data-src={slide} alt="" className="swiper-lazy" />
                        <div className="swiper-lazy-preloader">
                            <img src={preloader} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default MainSlider;
