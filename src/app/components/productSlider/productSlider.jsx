import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "./productSlider.scss";
import PropTypes from "prop-types";
import Skeleton from "../skeleton";
import ProductCard from "../productCard";

const ProductSlider = ({ products, onGetProduct, isLoading }) => {
    return (
        <Swiper
            spaceBetween={30}
            observer={true}
            slidesPerView={4}
            onSlideChange={() => {
                console.log("onSlideChange");
            }}
            onSliderFirstMove={() => {
                onGetProduct();
            }}
            onSwiper={(swiper) => console.log(swiper)}
            className={`product-slider _container ${
                isLoading ? "_disabled" : ""
            }`}
        >
            {isLoading
                ? [...new Array(5)].map((_, i) => (
                      <SwiperSlide key={i} className="product-slider__slide">
                          <Skeleton />
                      </SwiperSlide>
                  ))
                : products.map((p) => (
                      <SwiperSlide key={p.id} className="product-slider__slide">
                          <ProductCard
                              name={p.name}
                              weight={p.weight}
                              composition={p.composition}
                              price={p.price}
                          />
                      </SwiperSlide>
                  ))}
        </Swiper>
    );
};
ProductSlider.propTypes = {
    products: PropTypes.array,
    onGetProduct: PropTypes.func,
    isLoading: PropTypes.bool
};
export default ProductSlider;
