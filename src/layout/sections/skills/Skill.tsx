import FlexWrapper from "../../../components/flexWrapper/FlexWrapper";
import React from "react";
import styled from "styled-components";
import myTheme from "../../../styles/Theme.Styled";
import Icon from "../../../components/Icon/Icon";

type SkillPropsType = {
    skillText: string,
    skillTitle: string,
    skillIconId: string,
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkillBlock justify={"start"} direction={"column"} align={'center'}>
            <SRhombus justify={"center"} align={'center'}>
                <Icon iconId={props.skillIconId} width={"50"} height={"50"} rotate={"-45"}/>
            </SRhombus>
            <SkillTitle>{props.skillTitle}</SkillTitle>
            <SkillText>{props.skillText}</SkillText>
        </StyledSkillBlock>
    )
};

const StyledSkillBlock = styled(FlexWrapper)`
  width: 380px;
  height: 338px;
  padding: 70px 20px 0px 20px;
`

const SRhombus = styled(FlexWrapper)`
  transform: rotate(45deg);
  background-color: ${myTheme.colors.greyTwo};
  width: 80px;
  height: 80px;
  margin-bottom: 40px;
`

const SkillTitle = styled.h3`
    margin-bottom: 15px;
  font-family: ${myTheme.fonts.JosefinSans};
  font-size: 16px;
  font-weight: ${myTheme.fontWeight.bold};
  letter-spacing: 1px;
  text-transform: uppercase;
`

const SkillText = styled.p`
    text-align: center;
  font-size: 14px;
  font-weight:  ${myTheme.fontWeight.regular};
`