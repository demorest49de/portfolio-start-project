import React from 'react';
import styled from "styled-components";
import {StyledSection} from "../../../components/section/Section";
import SectionHeader from "../../../components/headers/SectionHeader";
import {RombusWithIcon} from "../skills/Skill";
import FlexWrapper from "../../../components/flexWrapper/FlexWrapper";
import {StyledParagraph} from "../../../components/paragraph";
import theme from "../../../styles/Theme.Styled";
import {Slider} from "../../../components/slider/Slider";

type TestimonyPropsType = {
    headerName: string,
    paragraphText: string,

    spanText: string,
}

export const Testimony = (props: TestimonyPropsType) => {
    return (
        <StyledSection
            backGrColor={theme.backgroundColor.secondary}
        >
            <SectionHeader text={props.headerName} mb={'60px'}/>
            <FlexWrapper justify={'center'} direction={'column'} align={'center'}>
                <RombusWithIcon skillIconId={'code'}/>
                <Slider
                    paragraphText={props.paragraphText}
                    spanText={props.spanText}
                />

            </FlexWrapper>
        </StyledSection>
    );
};