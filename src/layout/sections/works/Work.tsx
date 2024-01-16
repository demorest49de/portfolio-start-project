import React from 'react';
import styled from "styled-components";
import {SContainer} from "../../../components/container/Container";
import myTheme from "../../../styles/Theme.Styled";
import FlexWrapper from "../../../components/flexWrapper/FlexWrapper";
import SectionTitle from '../../../components/headers/SectionHeader';
import {HeaderPropsType} from "../hero/Hero";

export const Work = (props: HeaderPropsType) => {
    return (
        <SSkillsSection id={props.headerName}>
            <SContainer>
                <SectionTitle text={`My ${props.headerName}`} mb={"69px"}/>
                <FlexWrapper wrap={'wrap'} justify={'center'}>

                </FlexWrapper>
            </SContainer>
        </SSkillsSection>
    );
};


const SSkillsSection = styled.section`
  padding-top: 100px;
  padding-bottom: 108px;
  background-color: ${myTheme.backgroundColor.secondary};
`

const menuButtons = ['all', 'landing page', 'react', 'spa'];

