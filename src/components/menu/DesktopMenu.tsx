import React from "react";
import {Navigation} from "./Navigation";
import Logo from "../logo/Logo";
import {StyledDesktopNav} from "./StyledDesktopNav";
import styled from "styled-components";


const DesktopMenu = (props: { menuItems: string[] }) => {

    return (
        <StyledDesktopMenu>
            <Logo/>
            <StyledDesktopNav>
                <Navigation menuItems={props.menuItems}/>
            </StyledDesktopNav>
        </StyledDesktopMenu>
    )
};

export default DesktopMenu;

const StyledDesktopMenu = styled.div`
  display: flex;
  justify-content: space-between;
`