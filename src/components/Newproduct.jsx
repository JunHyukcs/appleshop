import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {  Navigation } from 'swiper/modules';

const Newproduct = () => {
 
    return (
        <div className='newproducts'>
            <h2><span>최신 제품.</span> 따끈따끈한 신제품 이야기.</h2>
            <Swiper className='swiperpadding'
                spaceBetween={20}
                slidesPerView={4.3}
                navigation={true}
                modules={[ Navigation]}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide className="card-full-box">
                    <div className="card-content-info">
                        <h3>MACBOOK AIR</h3>
                        <h2>어디서나 종횡무진할 수 있도록</h2>
                        <p>₩1,390,000</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="card-full-box ">
                    <div className="card-content-info">
                        <h3>IPHONE 15 PRO</h3>
                        <h2>티타늄 </h2>
                        <p>₩1,550,000</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="card-full-box">
                    <div className="card-content-info">
                        <h3>APPLE WATCH SERIES 9</h3>
                        <h2>보다 똑똑. 보다 또렷. 보다 강력. </h2>
                        <p>₩599,000</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="card-full-box">
                    <div className="card-content-info">
                        <h3>IPAD</h3>
                        <h2>쓰다. 그리다. 빠져들다. </h2>
                        <p>₩679,000</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="card-full-box">
                    <div className="card-content-info">
                        <h3>IPHONE 15</h3>
                        <h2>새로움 물씬</h2>
                        <p>₩1,250,000</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="card-full-box">
                    <div className="card-content-info">
                        <h3>MACBOOK PRO</h3>
                        <h2>비교 불가 성능. 시선 강탈 매력. </h2>
                        <p>₩2,390,000</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="card-full-box">
                    <div className="card-content-info">
                        <h3>APPLE WATCH ULTRA 2</h3>
                        <h2>한 차원 높은 모험. </h2>
                        <p>₩1,149,000</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="card-full-box">
                    <div className="card-content-info">
                        <h3>IPAD PRO</h3>
                        <h2>막강한 성능의 M2 칩 탑재. </h2>
                        <p>₩1,249,000</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="card-full-box">
                    <div className="card-content-info">
                        <h3>APPLE WATCH SE</h3>
                        <h2>부담 없이 빠져들다. </h2>
                        <p>₩329,000</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="card-full-box">
                    <div className="card-content-info">
                        <h3>NEW</h3>
                        <h2>새롭게 또 달콤하게. 손목을 감싸다. </h2>
                        <p>다양한 스타일과 색상의 최신 밴드 쇼핑하기.</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Newproduct;