import React from 'react'
import styled from "styled-components";
import {HeaderContainer} from "./HeaderContainer";

export const Header = () => {
    return (
        <SHeader>
            <HeaderContainer/>
        </SHeader>
    )
}

const SHeader = styled.header`
  max-height: 1024px;
  background-color: rgba(35, 35, 38, 0.9);
  //opacity: 0;
  //visibility: hidden;
`