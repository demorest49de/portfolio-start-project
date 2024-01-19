import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/container/Container";
import theme from "../../../styles/Theme.Styled";
import FlexWrapper from "../../../components/flexWrapper/FlexWrapper";
import SectionTitle from '../../../components/headers/SectionHeader';
import {Skill} from '../skills/Skill';
import {StyledSection} from "../../../components/section/Section";
import {HeaderPropsType} from '../../../components/types/types';

export const Skills = (props: HeaderPropsType) => {
    return (
        <StyledSection
            id={props.headerName}
            backGrColor={theme.backgroundColor.secondary}
        >
            <Container>
                <SectionTitle text={`My ${props.headerName}`} mb={'80px'}/>
                <FlexWrapper wrap={'wrap'}>
                    <Skill skillIconId={"code"}
                           skillTitle={'html5'}
                           skillText={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci debitis molestias nam odit quo temporibus?'}
                    />
                    <Skill skillIconId={"css3"}
                           skillTitle={'css3'}
                           skillText={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci debitis molestias nam odit quo temporibus?'}
                    />
                    <Skill skillIconId={"react"}
                           skillTitle={'react'}
                           skillText={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci debitis molestias nam odit quo temporibus?'}
                    />
                    <Skill skillIconId={"typescript"}
                           skillTitle={'typescript'}
                           skillText={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci debitis molestias nam odit quo temporibus?'}
                    />
                    <Skill skillIconId={"styledcomponents"}
                           skillTitle={'styled components'}
                           skillText={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci debitis molestias nam odit quo temporibus?'}
                    />
                    <Skill skillIconId={"figma"}
                           skillTitle={'figma'}
                           skillText={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci debitis molestias nam odit quo temporibus?'}
                    />
                </FlexWrapper>
            </Container>
        </StyledSection>
    );
};


const SSkillsSection = styled(StyledSection)`
  background-color: ${theme.backgroundColor.secondary};
`