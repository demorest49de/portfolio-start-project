import React from 'react';
import Icon from "../Icon/Icon";
import {menuSettings, Navigation} from "./Navigation";
import styled from "styled-components";
import {SMenuButton} from "../button/menuButton";
import myTheme from "../../styles/Theme.Styled";

type CloseBtnProps = {
    width: string,
    height: string,
}

const BurgerMenu = (props: {settings: menuSettings}) => {
    const size = '24';
    return (
        <SBurgerMenu>
            <SCloseBtn width={size} height={size}>
                <Icon iconId={'closebtn'} width={size} height={size}/>
            </SCloseBtn>
            <Navigation settings={props.settings}/>
        </SBurgerMenu>
    )
};

export default BurgerMenu;

const SCloseBtn = styled(SMenuButton)<CloseBtnProps>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  top: 35px;
  right: 25px;
`

const SBurgerMenu = styled.div`
  background-color: ${myTheme.header.backgroundColor};
  opacity: 0;
  visibility: hidden;
`