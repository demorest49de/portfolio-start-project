import React from 'react';
import Icon from "../Icon/Icon";
import styled from "styled-components";
import theme from "../../styles/Theme.Styled";

const Logo = () => {
    return (
        <SLogo href="#">
            <Icon iconId={'code'} width={'50'} height={'50'}/>
        </SLogo>
    );
};

export default Logo;

const SLogo = styled.a`
  width: 50px;

  // @media ${theme.media.tablet}{
  //   display: none;
  // }
`