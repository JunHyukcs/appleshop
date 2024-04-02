import React, { useState } from 'react';
import {Link, NavLink} from 'react-router-dom';
import { GrApple } from "react-icons/gr";
import { IoMdSearch } from "react-icons/io";
import { AiOutlineShopping } from "react-icons/ai";

const Navbar = () => {
    const [isHovering, setIsHovering] = useState(false);
    const activeStyle={
        color: '#000',
        fontWeight: 'bold'
    }
    const bgStyle={
        backgroundColor: isHovering? '#fff':''
    }
    return (
        <div className='nav' style={bgStyle}>
            <ul>
                <li className="logo icon"><Link to="/"><GrApple /></Link></li>
                <li onMouseOver={()=>setIsHovering(true)}  onMouseOut={() => setIsHovering(false)}><NavLink style={({isActive})=>(isActive? activeStyle : undefined)} to="/store">스토어</NavLink> 
                    {
                        isHovering? (
                            <div className="width100">
                        <ul>
                            <li>쇼핑하기
                                <div className="sub">
                                    <p>최신 제품 쇼핑하기</p>
                                    <p>Mac</p>
                                    <p>iPad</p>
                                    <p>iPhone</p>
                                    <p>Apple Watch</p>
                                    <p>액세서리</p>
                                </div>
                            </li>
                            <li>빠른링크
                                <div className="sub1-1">
                                    <p>매장 찾기</p>
                                    <p>주문 상태</p>
                                    <p>Apple Trand In</p>
                                    <p>할부 방식</p>
                                </div>
                            </li>
                            <li>특별할인 쇼핑하기
                                <div className="sub1-1">
                                    <p>인증 리퍼비쉬 제품</p>
                                    <p>교육</p>
                                    <p>비지니스</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                        ):("")
                    }
                </li>
                <li  onMouseOver={()=>setIsHovering(true)}  onMouseOut={() => setIsHovering(false)}><NavLink style={({isActive})=>(isActive? activeStyle : undefined)} to="/mac">Mac
                </NavLink>
                    {
                        isHovering? (
                            <div className="width100">
                        <ul>
                            <li>쇼핑하기
                                <div className="sub">
                                    <p>최신 제품 쇼핑하기</p>
                                    <p>Mac</p>
                                    <p>iPad</p>
                                    <p>iPhone</p>
                                    <p>Apple Watch</p>
                                    <p>액세서리</p>
                                </div>
                            </li>
                            <li>빠른링크
                                <div className="sub1-1">
                                    <p>매장 찾기</p>
                                    <p>주문 상태</p>
                                    <p>Apple Trand In</p>
                                    <p>할부 방식</p>
                                </div>
                            </li>
                            <li>특별할인 쇼핑하기
                                <div className="sub1-1">
                                    <p>인증 리퍼비쉬 제품</p>
                                    <p>교육</p>
                                    <p>비지니스</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                        ):("")
                    }
                </li>
                <li  onMouseOver={()=>setIsHovering(true)}  onMouseOut={() => setIsHovering(false)}><NavLink style={({isActive})=>(isActive? activeStyle : undefined)} to="/ipad">iPad
                </NavLink>
                    {
                        isHovering? (
                            <div className="width100">
                        <ul>
                            <li>쇼핑하기
                                <div className="sub">
                                    <p>최신 제품 쇼핑하기</p>
                                    <p>Mac</p>
                                    <p>iPad</p>
                                    <p>iPhone</p>
                                    <p>Apple Watch</p>
                                    <p>액세서리</p>
                                </div>
                            </li>
                            <li>빠른링크
                                <div className="sub1-1">
                                    <p>매장 찾기</p>
                                    <p>주문 상태</p>
                                    <p>Apple Trand In</p>
                                    <p>할부 방식</p>
                                </div>
                            </li>
                            <li>특별할인 쇼핑하기
                                <div className="sub1-1">
                                    <p>인증 리퍼비쉬 제품</p>
                                    <p>교육</p>
                                    <p>비지니스</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                        ):("")
                    }
                </li>
                <li  onMouseOver={()=>setIsHovering(true)}  onMouseOut={() => setIsHovering(false)}><NavLink style={({isActive})=>(isActive? activeStyle : undefined)} to="/iphone">iPhone
                </NavLink>
                    {
                        isHovering? (
                            <div className="width100">
                        <ul>
                            <li>쇼핑하기
                                <div className="sub">
                                    <p>최신 제품 쇼핑하기</p>
                                    <p>Mac</p>
                                    <p>iPad</p>
                                    <p>iPhone</p>
                                    <p>Apple Watch</p>
                                    <p>액세서리</p>
                                </div>
                            </li>
                            <li>빠른링크
                                <div className="sub1-1">
                                    <p>매장 찾기</p>
                                    <p>주문 상태</p>
                                    <p>Apple Trand In</p>
                                    <p>할부 방식</p>
                                </div>
                            </li>
                            <li>특별할인 쇼핑하기
                                <div className="sub1-1">
                                    <p>인증 리퍼비쉬 제품</p>
                                    <p>교육</p>
                                    <p>비지니스</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                        ):("")
                    }
                </li>
                <li  onMouseOver={()=>setIsHovering(true)}  onMouseOut={() => setIsHovering(false)}><NavLink style={({isActive})=>(isActive? activeStyle : undefined)} to="/watch">Watch
                </NavLink>
                    {
                        isHovering? (
                            <div className="width100">
                        <ul>
                            <li>쇼핑하기
                                <div className="sub">
                                    <p>최신 제품 쇼핑하기</p>
                                    <p>Mac</p>
                                    <p>iPad</p>
                                    <p>iPhone</p>
                                    <p>Apple Watch</p>
                                    <p>액세서리</p>
                                </div>
                            </li>
                            <li>빠른링크
                                <div className="sub1-1">
                                    <p>매장 찾기</p>
                                    <p>주문 상태</p>
                                    <p>Apple Trand In</p>
                                    <p>할부 방식</p>
                                </div>
                            </li>
                            <li>특별할인 쇼핑하기
                                <div className="sub1-1">
                                    <p>인증 리퍼비쉬 제품</p>
                                    <p>교육</p>
                                    <p>비지니스</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                        ):("")
                    }
                </li>
                <li  onMouseOver={()=>setIsHovering(true)}  onMouseOut={() => setIsHovering(false)}><NavLink style={({isActive})=>(isActive? activeStyle : undefined)} to="/airpods">AirPods
                </NavLink>
                    {
                        isHovering? (
                            <div className="width100">
                        <ul>
                            <li>쇼핑하기
                                <div className="sub">
                                    <p>최신 제품 쇼핑하기</p>
                                    <p>Mac</p>
                                    <p>iPad</p>
                                    <p>iPhone</p>
                                    <p>Apple Watch</p>
                                    <p>액세서리</p>
                                </div>
                            </li>
                            <li>빠른링크
                                <div className="sub1-1">
                                    <p>매장 찾기</p>
                                    <p>주문 상태</p>
                                    <p>Apple Trand In</p>
                                    <p>할부 방식</p>
                                </div>
                            </li>
                            <li>특별할인 쇼핑하기
                                <div className="sub1-1">
                                    <p>인증 리퍼비쉬 제품</p>
                                    <p>교육</p>
                                    <p>비지니스</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                        ):("")
                    }
                </li>
                <li  onMouseOver={()=>setIsHovering(true)}  onMouseOut={() => setIsHovering(false)}><NavLink style={({isActive})=>(isActive? activeStyle : undefined)} to="/tvhome">TV 및 홈
                </NavLink>
                    {
                        isHovering? (
                            <div className="width100">
                        <ul>
                            <li>쇼핑하기
                                <div className="sub">
                                    <p>최신 제품 쇼핑하기</p>
                                    <p>Mac</p>
                                    <p>iPad</p>
                                    <p>iPhone</p>
                                    <p>Apple Watch</p>
                                    <p>액세서리</p>
                                </div>
                            </li>
                            <li>빠른링크
                                <div className="sub1-1">
                                    <p>매장 찾기</p>
                                    <p>주문 상태</p>
                                    <p>Apple Trand In</p>
                                    <p>할부 방식</p>
                                </div>
                            </li>
                            <li>특별할인 쇼핑하기
                                <div className="sub1-1">
                                    <p>인증 리퍼비쉬 제품</p>
                                    <p>교육</p>
                                    <p>비지니스</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                        ):("")
                    }
                </li>
                <li  onMouseOver={()=>setIsHovering(true)}  onMouseOut={() => setIsHovering(false)}><NavLink style={({isActive})=>(isActive? activeStyle : undefined)} to="/enter">엔터테인먼트
                </NavLink>
                    {
                        isHovering? (
                            <div className="width100">
                        <ul>
                            <li>쇼핑하기
                                <div className="sub">
                                    <p>최신 제품 쇼핑하기</p>
                                    <p>Mac</p>
                                    <p>iPad</p>
                                    <p>iPhone</p>
                                    <p>Apple Watch</p>
                                    <p>액세서리</p>
                                </div>
                            </li>
                            <li>빠른링크
                                <div className="sub1-1">
                                    <p>매장 찾기</p>
                                    <p>주문 상태</p>
                                    <p>Apple Trand In</p>
                                    <p>할부 방식</p>
                                </div>
                            </li>
                            <li>특별할인 쇼핑하기
                                <div className="sub1-1">
                                    <p>인증 리퍼비쉬 제품</p>
                                    <p>교육</p>
                                    <p>비지니스</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                        ):("")
                    }
                </li>
                <li  onMouseOver={()=>setIsHovering(true)}  onMouseOut={() => setIsHovering(false)}><NavLink style={({isActive})=>(isActive? activeStyle : undefined)} to="/acc">액세사리
                </NavLink>
                    {
                        isHovering? (
                            <div className="width100">
                        <ul>
                            <li>쇼핑하기
                                <div className="sub">
                                    <p>최신 제품 쇼핑하기</p>
                                    <p>Mac</p>
                                    <p>iPad</p>
                                    <p>iPhone</p>
                                    <p>Apple Watch</p>
                                    <p>액세서리</p>
                                </div>
                            </li>
                            <li>빠른링크
                                <div className="sub1-1">
                                    <p>매장 찾기</p>
                                    <p>주문 상태</p>
                                    <p>Apple Trand In</p>
                                    <p>할부 방식</p>
                                </div>
                            </li>
                            <li>특별할인 쇼핑하기
                                <div className="sub1-1">
                                    <p>인증 리퍼비쉬 제품</p>
                                    <p>교육</p>
                                    <p>비지니스</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                        ):("")
                    }
                </li>
                <li  onMouseOver={()=>setIsHovering(true)}  onMouseOut={() => setIsHovering(false)}><NavLink style={({isActive})=>(isActive? activeStyle : undefined)} to="/help">고객지원
                </NavLink>
                    {
                        isHovering? (
                            <div className="width100">
                        <ul>
                            <li>쇼핑하기
                                <div className="sub">
                                    <p>최신 제품 쇼핑하기</p>
                                    <p>Mac</p>
                                    <p>iPad</p>
                                    <p>iPhone</p>
                                    <p>Apple Watch</p>
                                    <p>액세서리</p>
                                </div>
                            </li>
                            <li>빠른링크
                                <div className="sub1-1">
                                    <p>매장 찾기</p>
                                    <p>주문 상태</p>
                                    <p>Apple Trand In</p>
                                    <p>할부 방식</p>
                                </div>
                            </li>
                            <li>특별할인 쇼핑하기
                                <div className="sub1-1">
                                    <p>인증 리퍼비쉬 제품</p>
                                    <p>교육</p>
                                    <p>비지니스</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                        ):("")
                    }
                </li>
                <li className="icon"><Link><IoMdSearch /></Link></li>
                <li className="icon"><Link><AiOutlineShopping /></Link></li>
            </ul>
        </div>
    );
};

export default Navbar;