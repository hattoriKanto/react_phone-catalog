import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import {
  SwiperPaginationWrapper,
  SliderBanner,
  SwiperArrow,
  SliderArrowIconRight,
  LinkOne,
  LinkTwo,
  LinkThree,
  SliderArrowIconLeft,
  SliderContainer,
} from './Slider.styles.tsx';

const Slider = () => {
  return (
    <SliderContainer>
      <SliderBanner>
        <SwiperArrow className="swiper-button-prev">
          <SliderArrowIconRight src="img/chevron-right.svg" />
        </SwiperArrow>
        <Swiper
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
            type: 'bullets',
          }}
          slidesPerView={1}
          scrollbar={{ el: '.swiper-scrollbar', draggable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Pagination, Autoplay]}
        >
          <SwiperSlide>
            <LinkOne to="/phones" />
          </SwiperSlide>
          <SwiperSlide>
            <LinkTwo to="/accessories" />
          </SwiperSlide>
          <SwiperSlide>
            <LinkThree to="/tablets" />
          </SwiperSlide>
        </Swiper>
        <SwiperArrow className="swiper-button-next">
          <SliderArrowIconLeft src="img/chevron-right.svg" />
        </SwiperArrow>
      </SliderBanner>
      <SwiperPaginationWrapper className="swiper-pagination" />
    </SliderContainer>
  );
};

export default Slider;
