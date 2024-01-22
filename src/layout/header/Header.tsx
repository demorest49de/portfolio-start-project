import React from 'react'
import HeaderMenu from "./HeaderMenu";
import styled from "styled-components";
import theme from "../../styles/Theme.Styled";

export const Header = (props: { menuItems: string[] }) => {
    return (
        <StyledHeader>
                <HeaderMenu menuItems={props.menuItems}/>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
  height: 65px;
  width: 100%;

  @media ${theme.media.tablet} {
    width: 0;
    height: 0;
  }

  //todo na position fixed ne rabotaet padding sleva
  //position: absolute;
  //width: 1170px;
  //left: 15px;
  //right: 15px;
  //z-index: 2;
  //top: 0px;
  //backdrop-filter: blur(4px);
  //background-color: rgba(31, 31, 32, .6);
`