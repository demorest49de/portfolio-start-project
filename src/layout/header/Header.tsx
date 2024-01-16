import React from 'react'
import styled from "styled-components";
import {HeaderContainer} from "./HeaderContainer";

export const Header = (props: {menuItems: string[]}) => {
    return (
        <SHeader>
            <HeaderContainer menuItems={props.menuItems}/>
        </SHeader>
    )
}

const SHeader = styled.header`
  min-height: 100px;
`