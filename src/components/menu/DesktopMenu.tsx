import React from "react";
import {Menu} from "./Menu";
import Logo from "../logo/Logo";
import {StyledDesktopNav} from "./StyledDesktopNav";
import styled from "styled-components";
import FlexWrapper from "../flexWrapper/FlexWrapper";


const DesktopMenu = (props: { menuItems: string[] }) => {

    return (
        <FlexWrapper justify={"space-between"}>
            <Logo/>
            <StyledDesktopNav>
                <Menu menuItems={props.menuItems}/>
            </StyledDesktopNav>
        </FlexWrapper>
    )
};

export default DesktopMenu;