import React from 'react';
import styled from "styled-components";
import {SContainer} from "../../../components/container/Container";
import myTheme from "../../../styles/Theme.Styled";
import FlexWrapper from "../../../components/flexWrapper/FlexWrapper";
import SectionTitle from '../../../components/headers/SectionHeader';
import {Skill} from '../skills/Skill';

export const Skills = () => {
    return (
        <SSkillsSection id="Skills">
            <SContainer>
                <SectionTitle text={"My Skills"} mb={'80px'}/>
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
            </SContainer>
        </SSkillsSection>
    );
};


const SSkillsSection = styled.section`
  padding-top: 100px;
  padding-bottom: 140px;
  background-color: ${myTheme.backgroundColor.secondary};
`