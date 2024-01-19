import React from 'react'
import styled from "styled-components";
import {Container} from "../../components/container/Container";
import DesktopMenu from "../../components/menu/DesktopMenu";

export const Header = (props: { menuItems: string[] }) => {
    return (
        <SHeader>
            <StyledHeaderContainer>
                <DesktopMenu menuItems={props.menuItems}/>
            </StyledHeaderContainer>
        </SHeader>
    )
}

const SHeader = styled.header`
  min-height: 100px;
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