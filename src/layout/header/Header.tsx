import React from 'react'
import styled from "styled-components";
import {Container} from "../../components/container/Container";
import HeaderMenu from "./HeaderMenu";

export const Header = (props: { menuItems: string[] }) => {
    return (
        <StyledHeader>
            <StyledHeaderContainer>
                <HeaderMenu menuItems={props.menuItems}/>
            </StyledHeaderContainer>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
  min-height: 50px;
  padding-top: 20px;
  position: fixed;
  min-width: 100vw;
  z-index: 2;
  top: 0;
  backdrop-filter: blur(4px);
  background-color: rgba(31, 31, 32, .6);
`

const StyledHeaderContainer = styled(Container)`
  max-width: 1370px;
`