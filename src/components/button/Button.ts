import styled from "styled-components";
import theme from "../../styles/Theme.Styled";

export const Button = styled.button`
  color: ${theme.colors.white};
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;

  width: 170px;
  min-height: 32px;
  position: relative;
  text-align: center;
  padding-bottom: 10px;
  z-index: 1;

  &:hover {
    &:before {
      height: 100%;
      width: 100%;
      z-index: -1;
      min-height: 43px;
      transition: all .3s ease-in-out;
    }
  }

  &:before {
    content: '';
    display: inline-block;
    height: 10px;
    position: absolute;
    width: 50%;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${theme.colors.accent};
  }
`