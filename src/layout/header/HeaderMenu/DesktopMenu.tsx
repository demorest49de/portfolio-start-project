import React from "react";
import {Menu} from "../../../components/menu/Menu";
import Logo from "../../../components/logo/Logo";
import styled from "styled-components";
import FlexWrapper from "../../../components/flexWrapper/FlexWrapper";
import theme from "../../../styles/Theme.Styled";


const DesktopMenu = (props: { menuItems: string[] }) => {

    return (
        <StyledWrapper justify={"space-between"}>
            <Logo/>
            <StyledDesktopNav>
                <Menu menuItems={props.menuItems}/>
            </StyledDesktopNav>
        </StyledWrapper>
    )
};

export default DesktopMenu;

const StyledWrapper = styled(FlexWrapper)`
  position: relative;
`
const StyledDesktopNav = styled.nav`
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
    color: ${theme.colors.accent};
    font-family: Josefin Sans;
    font-size: 35px;
    font-weight: 400;
    line-height: 55px;
  }

  @media ${theme.media.tablet} {
    display: none;
  }
`