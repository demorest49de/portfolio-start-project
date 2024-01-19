import React from 'react';
import {Container} from "../../components/container/Container";
import styled from "styled-components";
import SectionHeader from "../../components/headers/SectionHeader";
import {StyledParagraph} from "../../components/paragraph";
import FlexWrapper, {FlexWrapperPropsType} from "../../components/flexWrapper/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <SectionHeader text={
                    "Svetlana"
                } mb={'26px'} fontSize={'22px'}/>
                <FlexWrapper justify={'center'}>
                    <LinksList>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                    </LinksList>
                </FlexWrapper>
                <StyledParagraph
                    fontSize={'12px'}
                    fontWeight={'400'}
                    color={'rgba(255, 255, 255, 0.50)'}
                >
                    © 2023 Svetlana Dyablo, All Rights Reserved.
                </StyledParagraph>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  padding: 40px 0;
`

const LinksList = styled.ul<FlexWrapperPropsType>`
  margin-bottom: 25px;
  text-align: center;
  max-width: fit-content;
  display: flex;
  flex-direction: row;
  gap: 20px;
`