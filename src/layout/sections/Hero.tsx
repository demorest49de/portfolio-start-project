import React from 'react';
import Section from "../../components/section/Section";

const _class = "hero";
const Hero = () => {
    return (
        <Section id="Hero" class={_class}>
            <HeroContent/>
        </Section>


    );
};

const HeroContent = () => {
    return (
        <>
            <div>
                <p>Hi There</p>
                <p>I'am Svetlana Dyablo</p>
                <p>A WEB Developer.</p>
            </div>
            <div>
                <img src="" alt="Svetlana Dyablo"/>
            </div>
        </>
    )
}

export default Hero;