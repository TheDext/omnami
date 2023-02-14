import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "./productSlider.scss";
import PropTypes from "prop-types";
import Skeleton from "../skeleton";
import ProductCard from "../productCard";

const ProductSlider = ({ products, isLoading }) => {
    return (
        <Swiper
            spaceBetween={30}
            observer={true}
            slidesPerView={4}
            // onSlideChange={() => {
            //     console.log("onSlideChange");
            // }}
            // onSliderFirstMove={() => {
            //     console.log("onSliderFirstMove");
            // }}
            // onSwiper={(swiper) => console.log(swiper)}
            className={`product-slider ${isLoading ? "_disabled" : ""}`}
        >
            {isLoading
                ? [...new Array(5)].map((_, i) => (
                      <SwiperSlide
                          key={`combo_${i}`}
                          className="product-slider__slide"
                      >
                          <Skeleton />
                      </SwiperSlide>
                  ))
                : products.map((p) => (
                      <SwiperSlide
                          key={p._id}
                          className="product-slider__slide"
                      >
                          <ProductCard
                              id={p._id}
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
    isLoading: PropTypes.bool
};
export default ProductSlider;
