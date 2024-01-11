import styled from "styled-components";
import {SContainer} from "../../components/container/Container";
import {MenuNavigation} from "../../components/menu/MenuNavigation";
import Icon from "../../components/Icon/Icon";
import {SMenuButton} from "../../components/button/menuButton";

type CloseBtnProps = {
    width: string,
    height: string,
}

export const HeaderContainer = () => {
    const size = '24';
    return (
        <SHeaderContainer>
            <SCloseBtn width={size} height={size}>
                <Icon iconId={'closebtn'} width={size} height={size}/>
            </SCloseBtn>
            <MenuNavigation/>
        </SHeaderContainer>
    )
}

const SHeaderContainer = styled(SContainer)`
  padding: 0;
  // TODO высота блока через заполнение контентом
  min-height: fit-content;
`

const SCloseBtn = styled(SMenuButton)<CloseBtnProps>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  top: 35px;
  right: 25px;
`