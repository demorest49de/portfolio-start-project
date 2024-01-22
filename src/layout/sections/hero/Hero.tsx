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
                <StyledWhoAmI><li>I am</li> <li><span>Svetlana</span> <span>Dyablo</span></li>
                </StyledWhoAmI>
                <p>A Web Developer. |</p>
            </SHeroDiv2>
            <SHeroDiv3>
                    <img src={DeveloperPhoto} alt="Svetlana Dyablo"/>
            </SHeroDiv3>
        </SHeroDiv1>
    )
}

const StyledWhoAmI = styled.ul`

  font-weight: ${theme.fontWeight.bold};
  font-size: 50px;
  letter-spacing: 2.5px;
  font-family: ${theme.fonts.JosefinSans};
  max-width: 578px;
  margin-bottom: 10px;
  display: flex;
  gap: 15px;

  @media ${theme.media.mobile597px} {
    flex-direction: column;
  }

  @media ${theme.media.mobile459px} {
    font-size: 36px;
    gap: 0px;
  }

  &::before {
    content: "";
    position: absolute;
    width: 76%;
    height: 20px;
    top: 64px;
    right: 1px;
    background-color: ${theme.colors.accent};
    opacity: .8;
    z-index: -1;

    @media ${theme.media.mobile597px} {
      width: 0;
    }
  }

  // todo razobratsja
  @media ${theme.media.mobile597px} {

    span {
      position: relative;

      &::before {
        content: "";
        position: absolute;
        width: 98%;
        height: 20px;
        top: 32px;
        right: 2px;
        background-color: ${theme.colors.accent};
        opacity: .8;
        z-index: -1;
      }
    }
  }

  @media ${theme.media.mobile459px} {

    span {
      &::before {
        top: 23px;
        right: 2px;
      }
    }
  }
  
`


const SHeroDiv2 = styled.div`
  position: relative;
  margin-bottom: 45px;

  p:nth-child(1) {
    font-weight: ${theme.fontWeight.regular};
    font-size: 14px;
    margin-bottom: 10px;
  }

  p:nth-child(3) {
    font-weight: ${theme.fontWeight.regular};
    font-size: 27px;
  }

  @media screen and (max-width: 597px) {
    p:nth-child(2) {
      font-size: 36px;
      letter-spacing: 1.8px;
    }

    p:nth-child(3) {
      font-size: 20px;
    }
  }
`

const SHeroDiv3 = styled.div`
  width: 350px;
  height: 430px;
  position: relative;
  //transform: translateX(-34px);
  @media screen and (max-width: 597px) {
    width: 310px;
    height: 380px;
  }

  &::before {
    content: "";
    position: absolute;
    width: 360px;
    height: 480px;
    z-index: -1;
    border: 5px solid #7572D5;
    top: -34px;
    left: 24px;
    @media screen and (max-width: 597px) {
      width: 314px;
      height: 434px;
    }

    @media screen and (max-width: 368px) {
      width: 305px;
    }
  }


  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const SHeroDiv1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;

  @media screen and (max-width: 998px) {
    justify-content: center;
  }
  
  @media screen and (max-width: 414px) {
    justify-content: start;
  }
`


export default Hero;
