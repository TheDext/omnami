import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "./productSlider.scss";
import img from "../../images/sliders/combo/01.png";
const ProductSlider = () => {
    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={4}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className="product-slider _container"
        >
            <SwiperSlide className="product-slider__slide">
                <div className="product-slider__item">
                    <div className="product-slider__img">
                        <img src={img} alt="" />
                    </div>
                    <div className="product-slider__body">
                        <div className="product-slider__title">Комбо 1</div>
                        <div className="product-slider__info">
                            450 гр 153 ккал / 100 гр
                        </div>
                        <div className="product-slider__composition">
                            - 2 пиццы 33 см (на выбор) - картофель фри или
                            по-деревенски (на выбор)
                        </div>
                        <div className="product-slider__bottom bottom-product-slider">
                            <div className="bottom-product-slider__price">
                                1500 ₽
                            </div>
                            <button className="bottom-product-slider__add">
                                В корзину
                            </button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default ProductSlider;
