import React from 'react';
import Icon from "../Icon/Icon";
import styled from "styled-components";

const Logo = () => {
    return (
        <SLogo href="#">
            <Icon iconId={'code'} width={'50'} height={'50'}/>
        </SLogo>
    );
};

export default Logo;

const SLogo = styled.a`
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: start;
  align-items: center;
`