import React from 'react';
import Section from "../../components/section/Section";

const _class = "hero";
const Hero = () => {
    return (
        <Section id="Hero" class={_class} content={<HeroContent/>}/>
    );
};

const HeroContent = () => {
    return (
        <>
            <div className={`${_class}__text-block`}>
                <p className={`${_class}__text-hi`}>Hi There</p>
                <p className={`${_class}__text-`}>I'am Svetlana Dyablo</p>
                <p className={`${_class}__text-`}>A WEB Developer.</p>
            </div>
            <div className={`${_class}__image-block`}>
                <img className={`${_class}__`} src="" alt="Svetlana Dyablo"/>
            </div>
        </>
    )
}

export default Hero;