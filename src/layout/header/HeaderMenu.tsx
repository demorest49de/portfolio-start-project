import React from "react";
import {DesktopMenu} from "./desktopMenu/DesktopMenu";
import Logo from "../../components/logo/Logo";
import styled from "styled-components";
import FlexWrapper from "../../components/flexWrapper/FlexWrapper";
import {MobileMenu} from "./mobileMenu/MobileMenu";


const HeaderMenu = (props: { menuItems: string[] }) => {

    return (
        <StyledWrapper justify={"space-between"}>
            <Logo/>
            <DesktopMenu menuItems={props.menuItems}/>
            <MobileMenu menuItems={props.menuItems}/>
        </StyledWrapper>
    )
};

export default HeaderMenu;

const StyledWrapper = styled(FlexWrapper)`
  position: relative;
`