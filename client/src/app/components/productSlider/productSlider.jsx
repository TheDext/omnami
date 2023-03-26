import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "./productSlider.scss";
import PropTypes from "prop-types";
import Skeleton from "../skeleton";
import ProductCard from "../productCard/productCard";

const ProductSlider = ({ products }) => {
    return (
        <Swiper
            className={`product-slider ${!products ? "_disabled" : ""}`}
            breakpoints={{
                320: {
                    centeredSlides: true,
                    slidesPerView: 1.1,
                    spaceBetween: 40
                },
                480: {
                    centeredSlides: false,
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 30
                }
            }}
        >
            {!products
                ? [...new Array(5)].map((_, i) => (
                      <SwiperSlide
                          key={`skeleton_${i}`}
                          className="product-slider__slide _slide-preloader"
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
                              img={p.img}
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
