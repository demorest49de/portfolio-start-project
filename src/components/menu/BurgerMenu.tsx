import React from 'react';
import Icon from "../Icon/Icon";
import {Menu} from "./Menu";
import styled from "styled-components";
import {SMenuButton} from "../button/menuButton";
import theme from "../../styles/Theme.Styled";
import {StyledBurgerNav} from "./StyledBurgerNav";

type CloseBtnProps = {
    width: string,
    height: string,
}

export const BurgerMenu = (props: { menuItems: string[] }) => {
    const size = '24';
    return (
        <StyledBurgerMenu>
            <SCloseBtn width={size} height={size}>
                <Icon iconId={'closebtn'} width={size} height={size}/>
            </SCloseBtn>
            <StyledBurgerNav>
                <Menu menuItems={props.menuItems}/>
            </StyledBurgerNav>
        </StyledBurgerMenu>
    )
};

const SCloseBtn = styled(SMenuButton)<CloseBtnProps>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  top: 35px;
  right: 25px;
`

const StyledBurgerMenu = styled.div`
  background-color: ${theme.colors.greyOne};

`