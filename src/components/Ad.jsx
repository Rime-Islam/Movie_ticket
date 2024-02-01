import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';




const Ad = () => {
    return (
        <div className='my-28'>
            <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
            <img src="https://i.ibb.co/87gyY9K/Screenshot-2024-02-01-160350.png" alt="slider" />
            <h3 className='text-3xl uppercase text-center -mt-16 text-white'>salads</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://i.ibb.co/DWL1cv7/Screenshot-2024-02-01-160402.png" alt="slider" />
            <h3 className='text-3xl uppercase text-center -mt-16 text-white'>pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://i.ibb.co/1f4g9NZ/Screenshot-2024-02-01-160422.png" alt="slider" />
            <h3 className='text-3xl uppercase text-center -mt-16 text-white'>soups</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://i.ibb.co/QP1vLHX/Screenshot-2024-02-01-160433.png" alt="slider" />
            <h3 className='text-3xl uppercase text-center -mt-16 text-white'>desserts</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://i.ibb.co/MDSM6qn/Screenshot-2024-02-01-160440.png" alt="slider" />
            <h3 className='text-3xl uppercase text-center -mt-16 text-white'>salads</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://i.ibb.co/hHDjfT2/Screenshot-2024-02-01-160538.png" alt="slider" />
            <h3 className='text-3xl uppercase text-center -mt-16 text-white'>salads</h3>
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Ad;