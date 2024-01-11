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
  max-height: 100px;
`