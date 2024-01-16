import React from 'react';
import styled from "styled-components";
import myTheme from '../../../styles/Theme.Styled';

export const StyledWork = styled.nav`

  display: flex;
  align-items: center;
  
  ul {
    min-height: inherit;
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: space-between;
  }

  li {
    font-size: 14px;
    font-weight: ${myTheme.fontWeight.regular};
    letter-spacing: 1px;
    text-transform: uppercase;
  }
`