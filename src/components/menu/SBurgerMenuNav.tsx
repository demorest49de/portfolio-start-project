import styled from "styled-components";
import myTheme from "../../styles/Theme.Styled";


export const SBurgerMenuNav = styled.nav`
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
    color: ${myTheme.colors.darkGrey};
    font-family: Josefin Sans;
    font-size: 50px;
    font-weight: 400;
    line-height: 55px;
  }
`