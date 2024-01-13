import FlexWrapper from "../../../components/flexWrapper/FlexWrapper";
import React from "react";
import styled from "styled-components";
import myTheme from "../../../styles/Theme.Styled";
import Icon, {StyledIcon} from "../../../components/Icon/Icon";

export const Skill = () => {
    return (
        <FlexWrapper justify={"center"} direction={"column"}>
            <SRhombus justify={"center"} align={'center'}>
                <Icon iconId={"code"} width={"50"} height={"50"} rotate={"-45"}/>
            </SRhombus>
        </FlexWrapper>
    )
};

const SRhombus = styled(FlexWrapper)`
  transform: rotate(45deg);
  background-color: ${myTheme.colors.greyTwo};
  width: 80px;
  height: 80px;
`