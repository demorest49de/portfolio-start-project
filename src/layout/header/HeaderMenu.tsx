import React from "react";
import {DesktopMenu} from "./desktopMenu/DesktopMenu";
import Logo from "../../components/logo/Logo";
import styled from "styled-components";
import {Container} from "../../components/container/Container";
import {MobileMenu} from "./mobileMenu/MobileMenu";
import theme from "../../styles/Theme.Styled";


const HeaderMenu = (props: { menuItems: string[] }) => {

    return (
        <StyledHeaderContainer>
            <Logo/>
            <DesktopMenu menuItems={props.menuItems}/>
            <MobileMenu menuItems={props.menuItems}/>
        </StyledHeaderContainer>
    )
};

export default HeaderMenu;

const StyledHeaderContainer = styled(Container)`
  max-width: 1170px;
  display: flex;
  align-items: end;
  justify-content: space-between;
  padding-left: 0;
  
  // todo razobratsja s kostilem
  @media ${theme.media.tablet971px}{
    padding-left: 15px;
  }
`