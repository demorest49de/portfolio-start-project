import React from 'react';
import Icon from "../Icon/Icon";
import styled from "styled-components";

const Logo: React.FC = () => {
    return (
        <SLogo href="#">
            <Icon iconId={'code'} width={'50'} height={'50'}/>
        </SLogo>
    );
};

export default Logo;

const SLogo = styled.a`
  width: 50px;
  height: inherit;
  display: flex;
  align-items: center;
`