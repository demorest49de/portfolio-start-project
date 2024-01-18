import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/container/Container";
import theme from "../../../styles/Theme.Styled";
import FlexWrapper from "../../../components/flexWrapper/FlexWrapper";
import SectionTitle from '../../../components/headers/SectionHeader';
import {HeaderPropsType} from "../hero/Hero";
import {Menu} from "../../../components/menu/Menu";
import {StyledWorkNav} from "./StyledWorkNav";
import {StyledSection} from "../../../components/section/Section";
import {Work} from "./Work";

const items = ["All", "landing page", "React", "spa"];

export const Works = (props: HeaderPropsType) => {
    return (
        <SSkillsSection id={props.headerName}>
            <Container>
                <SectionTitle text={`My ${props.headerName}`} mb={"69px"}/>
                <FlexWrapper wrap={'wrap'} justify={'center'} minHeight={'30px'}>
                    <StyledWorkNav>
                        <Menu menuItems={items}/>
                    </StyledWorkNav>
                    <Work/>
                </FlexWrapper>
            </Container>
        </SSkillsSection>
    );
};


const SSkillsSection = styled(StyledSection)`
  // background-color: ${theme.backgroundColor.secondary};
`

const menuButtons = ['all', 'landing page', 'react', 'spa'];