import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./additionalProductsSlider.scss";
import img from "../../images/sliders/additional/01.png";
import "swiper/scss";

const AdditionalProcuctsSlider = () => {
    return (
        <Swiper
            className="additional-products"
            slidesPerView={4}
            spaceBetween={30}
        >
            <SwiperSlide className="additional-products__slide _box">
                <div className="additional-products__item">
                    <div className="additional-products__img">
                        <img src={img} alt="" />
                    </div>
                    <div className="additional-products__body">
                        <div className="additional-products__title">
                            Соус спайси
                        </div>
                        <div className="additional-products__price">+ 13 ₽</div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="additional-products__slide">
                <div className="additional-products__item">
                    <div className="additional-products__img">
                        <img src={img} alt="" />
                    </div>
                    <div className="additional-products__body">
                        <div className="additional-products__title">
                            Соус спайси
                        </div>
                        <div className="additional-products__price">+ 13 ₽</div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="additional-products__slide">
                <div className="additional-products__item">
                    <div className="additional-products__img">
                        <img src={img} alt="" />
                    </div>
                    <div className="additional-products__body">
                        <div className="additional-products__title">
                            Соус спайси
                        </div>
                        <div className="additional-products__price">+ 13 ₽</div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="additional-products__slide">
                <div className="additional-products__item">
                    <div className="additional-products__img">
                        <img src={img} alt="" />
                    </div>
                    <div className="additional-products__body">
                        <div className="additional-products__title">
                            Соус спайси
                        </div>
                        <div className="additional-products__price">+ 13 ₽</div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="additional-products__slide">
                <div className="additional-products__item">
                    <div className="additional-products__img">
                        <img src={img} alt="" />
                    </div>
                    <div className="additional-products__body">
                        <div className="additional-products__title">
                            Соус спайси
                        </div>
                        <div className="additional-products__price">+ 13 ₽</div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="additional-products__slide">
                <div className="additional-products__item">
                    <div className="additional-products__img">
                        <img src={img} alt="" />
                    </div>
                    <div className="additional-products__body">
                        <div className="additional-products__title">
                            Соус спайси
                        </div>
                        <div className="additional-products__price">+ 13 ₽</div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="additional-products__slide">
                <div className="additional-products__item">
                    <div className="additional-products__img">
                        <img src={img} alt="" />
                    </div>
                    <div className="additional-products__body">
                        <div className="additional-products__title">
                            Соус спайси
                        </div>
                        <div className="additional-products__price">+ 13 ₽</div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default AdditionalProcuctsSlider;
