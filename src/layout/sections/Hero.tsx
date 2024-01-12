import React from 'react';
import Section from "../../components/section/Section";

const className = "hero";
const Hero = () => {
    return (
        <Section id="Hero" class={className}/>
    );
};

const Content = () => {
    return (
        <div className={`${className}__about-me`}>
            <p className={`${className}__hi`}>Hi There</p>
            <p className={`${className}__introduce-me`}>I'am Svetlana Dyablo</p>
            <p className={`${className}__who-am-i`}>A WEB Developer.</p>
            <div className={`${className}__image-outline-block`}>
                <img src="" alt=""/>
            </div>
        </div>
    )
}

export default Hero;