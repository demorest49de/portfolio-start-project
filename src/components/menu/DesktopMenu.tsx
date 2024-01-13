import styled from "styled-components";
import myTheme from "../../styles/Theme.Styled";
import React from "react";
import {menuSettings, Navigation} from "./Navigation";
import Logo from "../logo/Logo";


const DesktopMenu = (props: { settings: menuSettings }) => {

    return (
        <>
            <Logo/>
            <Navigation settings={props.settings}/>
        </>
    )
};

export default DesktopMenu;


const SDesktopMenu = styled.div`
  background-color: ${myTheme.colors.greyOne};
  opacity: 0;
  visibility: hidden;
`