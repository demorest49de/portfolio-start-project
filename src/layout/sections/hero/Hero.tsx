import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/container/Container";
import theme from "../../../styles/Theme.Styled";
import DeveloperPhoto from '../../../assets/images/7b1f8f2f0bdbca351355bd3fe1aab143.jpg'
import {HeaderPropsType} from '../../../components/types/types';

const Hero = (props: HeaderPropsType) => {
    return (
        <SHeroSection id={props.headerName}>
            <Container>
                <HeroContent/>
            </Container>
        </SHeroSection>

    );
};


const SHeroSection = styled.section
    `
      min-height: 100vh;
      display: flex;
      align-items: center;
    `

const HeroContent = () => {
    return (
        <SHeroDiv1>
            <SHeroDiv2>
                <p>Hi There</p>
                <p>I am Svetlana Dyablo
                </p>
                <p>A Web Developer. |</p>
                <SHeroRectangle></SHeroRectangle>
            </SHeroDiv2>
            <SHeroDiv3>
                <picture>
                    <img src={DeveloperPhoto} alt="Svetlana Dyablo"/>
                </picture>
            </SHeroDiv3>
        </SHeroDiv1>
    )
}

const SHeroRectangle = styled.div`
  position: absolute;
  width: 426px;
  height: 20px;
  top: 59px;
  left: 137px;
  background-color: ${theme.colors.accent};
  opacity: .8;
  z-index: -1;
`

const SHeroDiv1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
`

const SHeroDiv2 = styled.div`
  position: relative;

  p:nth-child(1) {
    font-weight: ${theme.fontWeight.regular};
    font-size: 14px;
    margin-bottom: 10px;
  }

  p:nth-child(2) {
    font-weight: ${theme.fontWeight.bold};
    font-size: 50px;
    letter-spacing: 2.5px;
    font-family: ${theme.fonts.JosefinSans};
    width: 578px;
    margin-bottom: 10px;
  }

  p:nth-child(3) {
    font-weight: ${theme.fontWeight.regular};
    font-size: 27px;
  }
`

const SHeroDiv3 = styled.div`
  min-width: 360px;
  height: 485px;
  border: 5px solid #7572D5;

  picture {
    display: block;
  }

  img {
    transform: translate(-34px, 24px);
    right: 34px;
    top: 24px;
    max-width: 350px;
    min-height: 430px;
    object-fit: cover;
    //object-position: -95px -69px;
  }
`


export default Hero;
