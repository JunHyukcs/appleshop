import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Experience = () => {
    return (
        <div className='experience'>
            <h2><span>Apple 경험.</span>Apple 제품 및 서비스로 더욱더 많은 걸 누리다.</h2>
            <Swiper 
            slidesPerView={3.5}
            spaceBetween={20}
            freeMode={true}
            navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide className='experienceBox'>
                    <h4>APPLE TV+</h4>
                    <h3>Apple 기기를 구입하면 Apple TV+가<br /> 3개월 무료.°</h3>
                </SwiperSlide>
                <SwiperSlide className='experienceBox'>
                    <h4>&nbsp;</h4>
                    <h3>네 가지 Apple 서비스. 한 번의<br /> 간편한 가입.</h3>
                </SwiperSlide>
                <SwiperSlide className='experienceBox'>
                    <h4>&nbsp;</h4>
                    <h3>보다 오래 안심할 수 있도록.</h3>
                    <h4>이제 AppleCare+가 우발적인 손상에 대한 수리<br /> 서비스를 횟수 제한 없이 제공합니다.</h4>
                </SwiperSlide>
                <SwiperSlide className='experienceBox'>
                    <h4>홈</h4>
                    <h3>앱 하나로 집안 전체를 관리하는<br /> 방법을 알아보세요.</h3>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Experience;