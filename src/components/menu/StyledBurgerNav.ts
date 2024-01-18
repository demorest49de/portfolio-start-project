import styled from "styled-components";
import theme from "../../styles/Theme.Styled";


export const StyledBurgerNav = styled.nav`
  display: flex;
  justify-content: center;
  padding: 354px 0;

  ul {
    max-width: 225px;
    height: 320px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  li {
    color: ${theme.colors.greyOne};
    font-family: ;
    font-size: 50px;
    font-weight: 400;
    line-height: 55px;
  }
`