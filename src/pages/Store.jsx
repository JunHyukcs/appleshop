import React, {useRef} from 'react';
import StoreTitle from '../components/StoreTitle';
import Cards from '../components/Cards';
import Newproduct from '../components/Newproduct';
import HelpHandleing from '../components/HelpHandleing';
import Different from '../components/Different';
import Accessory from '../components/Accessory';
import Choice from '../components/Choice';
import Experience from '../components/Experience';
import Special from '../components/Special';
import FastLink from '../components/FastLink';






const Store = () => {
    const topRef=useRef();
    const scrollTop = () => {
        if(topRef.current){
            topRef.current.scrollIntoView({behavior:'smooth'})
        }
    }
    return (
        <div ref={topRef}>
            <StoreTitle />
            <Cards />
            <Newproduct />
            <HelpHandleing />
            <Different />
            <Accessory />
            <Choice />
            <Experience />
            <Special />
            <FastLink />
            

            <button className='topRef' onClick={scrollTop}>Top</button>
        </div>
    );
};

export default Store;