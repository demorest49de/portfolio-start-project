import React from 'react'
import styled from "styled-components";
import {Container} from "../../components/Container";

export const Header = () => {
    return (
        <SHeader>
            <Container/>
        </SHeader>
    )
}

const SHeader = styled.header`
    min-height: 1024px;
  background-color: rgba(31, 31, 32, 0.90);
`