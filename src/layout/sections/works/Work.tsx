import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/container/Container";
import myTheme from "../../../styles/Theme.Styled";
import FlexWrapper from "../../../components/flexWrapper/FlexWrapper";
import SectionTitle from '../../../components/headers/SectionHeader';
import {HeaderPropsType} from "../hero/Hero";
import {Menu} from "../../../components/menu/Menu";
import {StyledWork} from "./StyledWork";

const items = ["All", "landing page", "React", "spa"];

export const Work = (props: HeaderPropsType) => {
    return (
        <SSkillsSection id={props.headerName}>
            <Container>
                <SectionTitle text={`My ${props.headerName}`} mb={"69px"}/>
                <FlexWrapper wrap={'wrap'} justify={'center'} minHeight={'30px'}>
                    <StyledWork>
                        <Menu menuItems={items}/>
                    </StyledWork>
                </FlexWrapper>
            </Container>
        </SSkillsSection>
    );
};


const SSkillsSection = styled.section`
  padding-top: 100px;
  padding-bottom: 108px;
  background-color: ${myTheme.backgroundColor.secondary};
`

const menuButtons = ['all', 'landing page', 'react', 'spa'];



