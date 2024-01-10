import styled from "styled-components";
import {SContainer} from "../../components/Container";
import {MenuNavigation} from "../../components/menu/MenuNavigation";

export const HeaderContainer = () => {
    return (
        <SHeaderContainer>
            <MenuNavigation/>
        </SHeaderContainer>
    )
}

export const SHeaderContainer = styled(SContainer)`
  padding: 0;
  // TODO высота блока через заполнение контентом
  min-height: fit-content;
`