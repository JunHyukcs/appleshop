import React from 'react';

const Special = () => {
    return (
        <div className='special'>
            <h2><span>특별 할인.</span> 비즈니스, 학교 등을 위한 혜택.</h2>
            <div className="specialWrap">
                <div className="specialBox">
                    <h4>교육</h4>
                    <h3>교육 할인가로 새로운 Mac을 더욱 부담 없이.<sup>3</sup></h3>
                </div>
                <div className="specialBox">
                    <h4>비즈니스</h4>
                    <h3 className='white'>대기업부터 중소기업까지 Apple이 함께합니다.<sup>3</sup></h3>
                </div>
                <div className="specialBox">
                    <h4>인증 리퍼비쉬 제품</h4>
                    <h3>1년 보증이 제공되는 리퍼비쉬 Apple 제품을 쇼핑하세요. </h3>
                </div>
            </div>
        </div>
    );
};

export default Special;