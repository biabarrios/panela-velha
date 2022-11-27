import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import useStyles from "./styles";

import { Pagination, Navigation, Autoplay } from "swiper";

export default function Carousel({ data }) {
  const classes = useStyles();

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className={classes.mySwiper}
    >
      {data.map((item) => (
        <SwiperSlide className={classes.swiperSlide}>
          <img src={item.url} alt={item.alt} className={classes.image} />
          <div className={classes.containerText}></div>
          <div className={classes.contentText}>
            <img
              src="/element1.svg"
              className={`${classes.element} ${classes.element1}`}
            />
            <img
              src="/element2.svg"
              className={`${classes.element} ${classes.element2}`}
            />
            <img
              src="/element3.svg"
              className={`${classes.element} ${classes.element3}`}
            />
            <img
              src="/element4.svg"
              className={`${classes.element} ${classes.element4}`}
            />
            <div className={classes.text}>
              <h1>{item.name}</h1>
              <h2>
                {item.value.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </h2>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

Carousel.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
};
