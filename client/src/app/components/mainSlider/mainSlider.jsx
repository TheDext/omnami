import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Lazy } from "swiper";
import "swiper/scss";
import "./mainSlider.scss";
import preloader from "../../icons/logoFooter.png";

const MainSlider = () => {
    const slides = [
        "https://previews.dropbox.com/p/thumb/AB0yu6dVmWeLtRB5H4Sw-rxqYQqxG0QlDv0K6-nWhCP3EmaBIvS1tZkYxAMzxrKhMvaRvbdPl3f16GCAVqCbB9IG4YF2iEiQWV75qjNZnsZNJf_jbRhKDNTxxQ7MM-5OwLVy54U_HS1Oh0_j16sDXa_iN3mD56grfjw_A1jhdHZmOLaDzrYXkxGqTEyWTXIWlWoZXjf1qHGVQEp9CU7lxJcY5lLXwqWdFzt63ouuHShQRQ3ukhZEv3uusQDwb30YmVOS1rxiiUHuj6r9oK-EBHx9Mip0IkjHorurokNwSGBRbtWCfPYsZAVtFRgtnjhGpVwv3PtTDb_9lMZA6rjXZumAExVGnprPpAdcVWR_LsDjNF6gsKES6DIwORstHivggIk/p.jpeg",
        "https://previews.dropbox.com/p/thumb/AB0us1g5GKmGo_wK9fZFir9SySpYNKcywd6ukj6LxconBSfmwD4eiPTtYVI8SzKoCXbEEZJoQWcMUsonRpg-Iupcg2fe6-9pSkxH1vA03jYE7oeBPT8gpYyNaml3MXaOK49EqUbZeghoPewIajAd_tBjql1952DNfICcM_9kn3rQcZ68fZmUtbu5psQ1HoPtCvWwd-pZO3UEXLj3AAgDNM3WYEX8larXCQPRMAA8gshV-D0eAt84KMkl4flKdYufTdIQUdkX-yII1XwhBytKpkRtZSXCSboMq580MURFUHkwPASEULgtmvpoMseRVrY14sO8bmOKLEWaqtfGFF5d65TxbDwSP23qemjIzJ0dQEMu0oWEoB6VXo_07xvevtvDOPo/p.jpeg",
        "https://previews.dropbox.com/p/thumb/AB383ZFZFV878rQu9U0qi-54iYavov2mwxIfQM1VGgmU-QflCSI_-rWK2yODK43pY4wnnLw4mrTE_1Junhk-hTFy97xkCW1I9nceeXbFINUpRXrUSEP37uct6MWRGUQ0vk3Ifnio1G5ueOZFGMf45NyIEejjwTR3enAPfw43qSjxSmTQiPiRs3LIvXxrFXQUGXFmuZQHoMe86RU0uSQ1oC-Hr63bdBLAJSxf_iJ8EGVW-PZvmWkjKsH1UOp7o57UXE0jKhwrAEXJXQ620Co3UwEuYliqtOHVNZAEPGzoAPikL0lT7U43Mlgrq-DOjlT1KQDkCHWAj28XvWWsIOT6XrT5q8Bc4RoX_A_D_xoaPGY2lFfbaQAw82wGXoUE9QU_xC8/p.jpeg"
    ];
    return (
        <Swiper
            className="main-slider"
            modules={[Lazy]}
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
