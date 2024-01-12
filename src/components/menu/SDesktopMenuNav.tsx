import React from 'react';
import styled from "styled-components";
import myTheme from "../../styles/Theme.Styled";

const SDesktopMenuNav = styled.nav`
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
    color: ${myTheme.colors.pink};
    font-family: Josefin Sans;
    font-size: 50px;
    font-weight: 400;
    line-height: 55px;
  }
`

export default SDesktopMenuNav;