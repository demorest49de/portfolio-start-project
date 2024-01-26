import React from "react";
import {DesktopMenu} from "./desktopMenu/DesktopMenu";
import Logo from "../../components/logo/Logo";
import styled from "styled-components";
import {Container} from "../../components/container/Container";
import {MobileMenu} from "./mobileMenu/MobileMenu";


const HeaderMenu: React.FC<{ menuItems: string[] }> = (props: { menuItems: string[] }) => {

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
  justify-content: space-between;
`