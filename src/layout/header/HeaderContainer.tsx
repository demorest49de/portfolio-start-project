import styled from "styled-components";
import {SContainer} from "../../components/container/Container";
import DesktopMenu from "../../components/menu/DesktopMenu";

export const HeaderContainer = (props: {menuItems: string[]}) => {

    return (
        <SHeaderContainer>
            <DesktopMenu menuItems={props.menuItems}/>
        </SHeaderContainer>
    )
}

const SHeaderContainer = styled(SContainer)`
  
  // высота блока через заполнение контентом
  min-height: fit-content;
`