import React from 'react';
import styled from "styled-components";
import {StyledSection} from "../../../components/section/Section";
import SectionHeader from "../../../components/headers/SectionHeader";
import {RombusWithIcon} from "../skills/Skill";
import FlexWrapper from "../../../components/flexWrapper/FlexWrapper";
import {StyledParagraph} from "../../../components/paragraph";
import theme from "../../../styles/Theme.Styled";

type TestimonyPropsType = {
    headerName: string,
    paragraphText: string,

    spanText: string,
}

export const Testimony = (props: TestimonyPropsType) => {
    return (
        <StyledTestimonySection>
            <SectionHeader text={props.headerName} mb={'60px'}/>
            <FlexWrapper justify={'center'} direction={'column'} align={'center'}>
                <RombusWithIcon skillIconId={'code'}/>
                <StyledParagraph maxWidth={'500px'}
                                 maxHeight={'63px'}
                                 clamp={'3'}
                                 mb={'22px'}
                >
                    {props.paragraphText}
                </StyledParagraph>
                <StyledSpan>
                    {props.spanText}
                </StyledSpan>
            </FlexWrapper>
        </StyledTestimonySection>
    );
};

const StyledTestimonySection = styled(StyledSection)`
  margin-bottom: 40px;
  background-color: ${theme.backgroundColor.secondary};
`
const StyledSpan = styled.span`
  text-align: center;
  font-family: ${theme.fonts.JosefinSans};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
`
