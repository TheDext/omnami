import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./additionalProductsSlider.scss";
import "swiper/scss";
import { getProducts, loadProductList } from "../../store/products";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/cart";
import Skeleton from "../skeleton";

const AdditionalProcuctsSlider = () => {
    const productEndpoint = "additionally";
    const dispatch = useDispatch();
    const products = useSelector(getProducts(productEndpoint));
    const handleClick = (product) => {
        dispatch(addToCart(product));
    };

    useEffect(() => {
        dispatch(loadProductList(productEndpoint));
    }, []);

    return (
        <Swiper
            className="additional-products"
            loop
            breakpoints={{
                320: {
                    slidesPerView: 1.2,
                    spaceBetween: 20
                },
                425: {
                    slidesPerView: 1.7
                },
                768: {
                    slidesPerView: 2.3,
                    spaceBetween: 30
                },
                992: {
                    slidesPerView: 3.5,
                    spaceBetween: 30
                }
            }}
        >
            {!products
                ? [...new Array(5)].map((_, i) => (
                      <SwiperSlide
                          key={`skeleton_${i}`}
                          className="additional-products__slide _slide-preloader"
                      >
                          <Skeleton />
                      </SwiperSlide>
                  ))
                : products.map(({ createdAt, _id, name, price, img }) => (
                      <SwiperSlide
                          key={createdAt + _id}
                          className="additional-products__slide _box"
                          onClick={() =>
                              handleClick({ id: _id, name, price, img })
                          }
                      >
                          <div className="additional-products__item">
                              <div className="additional-products__img">
                                  <img src={img} alt="" />
                              </div>
                              <div className="additional-products__body">
                                  <div className="additional-products__title">
                                      {name}
                                  </div>
                                  <div className="additional-products__price">
                                      + {price} ₽
                                  </div>
                              </div>
                          </div>
                      </SwiperSlide>
                  ))}
        </Swiper>
    );
};

export default AdditionalProcuctsSlider;
