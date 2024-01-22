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
    const skillStuff = [
        {
            skillIconId: "code",
            skillTitle: "html5",
            skillText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci debitis molestias nam odit quo temporibus?"
        },
        {
            skillIconId: "css3",
            skillTitle: "css3",
            skillText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci debitis molestias nam odit quo temporibus?",
        },
        {
            skillIconId: "react",
            skillTitle: "react",
            skillText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci debitis molestias nam odit quo temporibus?",
        },
        {
            skillIconId: "typescript",
            skillTitle: "typescript",
            skillText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci debitis molestias nam odit quo temporibus?",
        },
        {
            skillIconId: "styledcomponents",
            skillTitle: "styledcomponents",
            skillText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci debitis molestias nam odit quo temporibus?",
        },
        {
            skillIconId: "figma",
            skillTitle: "figma",
            skillText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci debitis molestias nam odit quo temporibus?",
        },
    ]
    return (
        <StyledSection
            id={props.headerName}
            backGrColor={theme.backgroundColor.secondary}
        >
            <Container>
                <SectionTitle text={`My ${props.headerName}`} mb={'80px'}/>
                <FlexWrapper wrap={'wrap'} justify={'center'}>
                    {skillStuff.map((item, index) => {
                        return <Skill skillIconId={item.skillIconId}
                                      skillTitle={item.skillTitle}
                                      skillText={item.skillText}
                        />
                    })}
                </FlexWrapper>
            </Container>
        </StyledSection>
    );
};


const SSkillsSection = styled(StyledSection)`
  background-color: ${theme.backgroundColor.secondary};
`