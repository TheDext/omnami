import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "./mainSlider.scss";
import img01 from "../../images/sliders/main/01.jpg";
import img02 from "../../images/sliders/main/02.jpg";
import img03 from "../../images/sliders/main/03.jpg";

const MainSlider = () => (
    <Swiper
        spaceBetween={30}
    slidesPerView={1.5}

        centeredSlides={true}
        loop={true}
        onSlideChange={() => {
            // console.log("onSlideChange");
        }}
        onSliderFirstMove={() => {
            // console.log("onSliderFirstMove");
        }}
        onSwiper={(swiper) => console.log(swiper)}
        className={"main-slider"}
    >
        <SwiperSlide className="main-slider__slide">
            <div className="main-slider__img">
                <img src={img01} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide className="main-slider__slide">
            <div className="main-slider__img">
                <img src={img02} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide className="main-slider__slide">
            <div className="main-slider__img">
                <img src={img03} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide className="main-slider__slide">
            <div className="main-slider__img">
                <img src={img02} alt="" />
            </div>
        </SwiperSlide>
    </Swiper>
);

export default MainSlider;
