import React from 'react';
import styled from "styled-components";
import theme from "../../styles/Theme.Styled";

export const StyledDesktopNav = styled.nav`
  display: flex;
  justify-content: end;
  padding: 0;
  height: 100px;

  ul {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  li {
    color: ${theme.colors.pink};
    font-family: Josefin Sans;
    font-size: 50px;
    font-weight: 400;
    line-height: 55px;
  }
`