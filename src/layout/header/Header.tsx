import React from 'react'
import styled from "styled-components";
import {HeaderContainer} from "./HeaderContainer";

export const Header = (props: {items: string[]}) => {
    return (
        <SHeader>
            <HeaderContainer items={props.items}/>
        </SHeader>
    )
}

const SHeader = styled.header`
  min-height: 100px;
`