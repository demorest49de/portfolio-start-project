import styled from "styled-components";
import {SContainer} from "../../components/container/Container";
import DesktopMenu from "../../components/menu/DesktopMenu";

export const HeaderContainer = (props: {items: string[]}) => {
    const settings = {
        items: props.items,
        BurgerMenuVisible: false,
    }
    return (
        <SHeaderContainer>
            <DesktopMenu settings={settings}/>
        </SHeaderContainer>
    )
}

const SHeaderContainer = styled(SContainer)`
  
  // TODO высота блока через заполнение контентом
  min-height: fit-content;
  display: flex;
  justify-content: space-between;
`