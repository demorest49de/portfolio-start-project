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
  height: 60px;
  width: 100%;

  @media ${theme.media.tablet} {
    width: 0;
    height: 0;
  }

  //todo na position fixed ne rabotaet padding sleva
  position: fixed;
  max-width: 1170px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  backdrop-filter: blur(4px);
  background-color: rgba(31, 31, 32, .6);
  top: 0;right: 0;
`