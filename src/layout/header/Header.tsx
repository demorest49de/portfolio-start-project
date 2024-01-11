import React from 'react'
import styled from "styled-components";
import {HeaderContainer} from "./HeaderContainer";
import myTheme from "../../styles/Theme.Styled";

export const Header = () => {
    return (
        <SHeader>
            <HeaderContainer/>
        </SHeader>
    )
}

const SHeader = styled.header`
  max-height: 1024px;
  background-color: ${myTheme.header.backgroundColor};
  //opacity: 0;
  //visibility: hidden;
`