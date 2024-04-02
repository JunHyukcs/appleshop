import React from 'react';
import { Link } from 'react-router-dom';


const FastLink = () => {
    return (
        <div className='fastlink'>
            <h2>빠른 링크</h2>
            <ul>
                <li>
                    <Link>주문 상태</Link>
                </li>
                <li>
                    <Link>쇼핑 도움말</Link>
                </li>
                <li>
                    <Link>반품</Link>
                </li>
                <li>
                    <Link>관심목록</Link>
                </li>
            </ul>
        </div>
    );
};

export default FastLink;