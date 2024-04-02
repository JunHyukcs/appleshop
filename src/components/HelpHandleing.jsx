import React from 'react';
import { Link } from 'react-router-dom';

const HelpHandleing = () => {
    return (
        <div className='helphandleing'>
            <h2><span>도움의 손길.</span> 언제든, 당신에게 맞는 방식으로.</h2>
            <ul>
                <li>
                    <Link>
                        <div className="card-content-info">
                            <h3>APPLE 스페셜리스트</h3>
                            <h2>스페셜리스트와 함께하는 일대일 쇼핑. <br />온라인에서도 매장에서도.</h2>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link>
                        <div className="card-content-info">
                            <h3>TODAY AT APPLE</h3>
                            <h2>Apple Store의 무료 세션에 참여해 보세요.</h2>
                            <p>최신 기능과 더불어 Apple 기기를 더욱 심도 있게 활용하는 법을 알아보세요.</p>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link>
                        <div className="card-info1 card-info">
                            <h3>무료 온라인 개인 맞춤 세션에서 새 기기를<br /> 설정하는 방법을 배워보세요.</h3>
                        </div>
                    </Link>
                    <Link>
                        <div className="card-info2 card-info">
                            <h3>Genius Bar에서 직접 <br /> 전문가의 도움을 받을 <br />수 있습니다.</h3>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default HelpHandleing;