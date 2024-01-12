import React from 'react';
import styled from "styled-components";
import {SContainer} from "../../components/container/Container";
import myTheme from "../../styles/Theme.Styled";

const Skills = () => {
    return (
        <SSkillsSection id="Hero">
            <SContainer>
                <SkillsContent/>
            </SContainer>
        </SSkillsSection>

    );
};


const SSkillsSection = styled.section`
  padding-top: 100px;
  padding-bottom: 140px;
  background-color: ${myTheme.backgroundColor.secondary};
`

const SkillsContent = () => {
    return (
        <SSKillsDiv1>
            
        </SSKillsDiv1>
    )
}

const SSKillsDiv1 = styled.div`
`

export default Skills;
