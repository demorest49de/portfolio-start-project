import React from 'react'
import styled from "styled-components";
import {Container} from "../../components/container/Container";
import DesktopMenu from "../../components/menu/DesktopMenu";

export const Header = (props: { menuItems: string[] }) => {
    return (
        <SHeader>
            <Container>
                <DesktopMenu menuItems={props.menuItems}/>
            </Container>
        </SHeader>
    )
}

const SHeader = styled.header`
  min-height: 100px;
  position: absolute;
  min-width: 100vw;
`