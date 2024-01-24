import React from "react";
import {DesktopMenu} from "./desktopMenu/DesktopMenu";
import Logo from "../../components/logo/Logo";
import styled, {css} from "styled-components";
import {Container} from "../../components/container/Container";
import {MobileMenu} from "./mobileMenu/MobileMenu";
import theme from "../../styles/Theme.Styled";


const HeaderMenu = (props: { menuItems: string[] }) => {

    return (
        <StyledHeaderContainer>
            <Logo/>
            <DesktopMenu menuItems={props.menuItems}/>
            <MobileMenu menuItems={props.menuItems}/>
            <BurgerButton isOpen={false}>
                <span>
                </span>
            </BurgerButton>
        </StyledHeaderContainer>
    )
};

export default HeaderMenu;

const StyledHeaderContainer = styled(Container)`
  max-width: 1170px;
  display: flex;
  justify-content: space-between;
`


const BurgerButton = styled.button<{ isOpen: boolean }>`
  display: none;
  width: 50px;
  height: 50px;
  z-index: 3;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  
  @media ${theme.media.tablet} {
    display: flex;
  }
  // srednjaja cherta burger menu
  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.accent};

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: rgba(255, 255, 255, 0);
      //pochemu ne opacity => togda k before i after tozhe primenitsja opacity 
    `}
    &::before {
      content: '';
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.accent};
      position: absolute;
      transform: translateY(-10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0px);
      `}
    }

    &::after {
      content: '';
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.accent};
      position: absolute;
      transform: translateY(10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(45deg) translateY(0px);
        width: 36px;
      `}
    }
  }
`