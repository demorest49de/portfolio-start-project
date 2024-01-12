import React from 'react';
import styled from "styled-components";
import {Container, SContainer} from "../../components/container/Container";
import myTheme from "../../styles/Theme.Styled";

const _class = "hero";
const Hero = () => {
    return (
        <SHeroSection id="Hero">
            <SContainer>
                <HeroContent/>
            </SContainer>
        </SHeroSection>

    );
};


const SHeroSection = styled.section`
  padding-top: 172px;
  padding-bottom: 282px;
`

const HeroContent = () => {
    return (
        <SHeroDiv1>
            <SHeroDiv2>
                <p>Hi There</p>
                <p>I am Svetlana Dyablo</p>
                <p>A Web Developer. |</p>
            </SHeroDiv2>
            <SHeroDiv3>
                <picture>
                    <img src="./../../assets/images/7b1f8f2f0bdbca351355bd3fe1aab143.jpg" alt="Svetlana Dyablo"/>
                </picture>
            </SHeroDiv3>
        </SHeroDiv1>
    )
}

const SHeroDiv1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const SHeroDiv2 = styled.div`
  p:nth-child(1) {
    font-weight: ${myTheme.fontWeight.regular};
    font-size: 14px;
    margin-bottom: 10px;
  }

  p:nth-child(2) {
    font-weight: ${myTheme.fontWeight.bold};
    font-size: 50px;
    letter-spacing: 2.5px;
    font-family: ${myTheme.fonts.JosefinSans};
    width: 578px;
    margin-bottom: 10px;
  }

  p:nth-child(3) {
    font-weight: ${myTheme.fontWeight.regular};
    font-size: 27px;
  }
`

const SHeroDiv3 = styled.div`
  min-width: 360px;
  height: 485px;
  border: 5px solid #7572D5;

  picture {
    display: block;
    position: relative;
  }

  img {
    position: absolute;
    right: 34px;
    top: 24px;
    min-width: 350px;
    height: 430px;
  }
`


export default Hero;
