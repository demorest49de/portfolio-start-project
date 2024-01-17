import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/container/Container";
import myTheme from "../../../styles/Theme.Styled";
import FlexWrapper from "../../../components/flexWrapper/FlexWrapper";
import SectionTitle from '../../../components/headers/SectionHeader';
import {Skill} from '../skills/Skill';
import {HeaderPropsType} from "../hero/Hero";
import {StyledSection} from "../../../components/section/Section";

export const Skills = (props: HeaderPropsType) => {
    return (
        <SSkillsSection id={props.headerName}>
            <Container>
                <SectionTitle text={`My ${props.headerName}`} mb={'80px'}/>
                <FlexWrapper wrap={'wrap'}>
                    <Skill skillIconId={"code"}
                           skillTitle={'html5'}
                           skillText={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci debitis molestias nam odit quo temporibus?'}
                    />
                     <Skill skillIconId={"css3"}
                           skillTitle={'html5'}
                           skillText={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci debitis molestias nam odit quo temporibus?'}
                    />
                    <Skill skillIconId={"react"}
                           skillTitle={'html5'}
                           skillText={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci debitis molestias nam odit quo temporibus?'}
                    />
                    <Skill skillIconId={"code"}
                           skillTitle={'html5'}
                           skillText={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci debitis molestias nam odit quo temporibus?'}
                    />
                    <Skill skillIconId={"code"}
                           skillTitle={'html5'}
                           skillText={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci debitis molestias nam odit quo temporibus?'}
                    />
                    <Skill skillIconId={"code"}
                           skillTitle={'html5'}
                           skillText={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci debitis molestias nam odit quo temporibus?'}
                    />
                </FlexWrapper>
            </Container>
        </SSkillsSection>
    );
};


const SSkillsSection = styled(StyledSection)`
  background-color: ${myTheme.backgroundColor.secondary};
`