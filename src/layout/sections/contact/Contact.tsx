import React from 'react';
import {StyledSection} from "../../../components/section/Section";
import SectionHeader from "../../../components/headers/SectionHeader";
import styled, {css} from 'styled-components';
import FlexWrapper, {FlexWrapperPropsType} from "../../../components/flexWrapper/FlexWrapper";
import {Container} from "../../../components/container/Container";

export const Contact = (props: { headerName: string }) => {
    return (
        <StyledSection id={props.headerName}>
            <Container>
                <SectionHeader text={props.headerName} mb={'62px'}/>
                <FlexWrapper justify={'center'}>
                    <StyledForm flexbox={true}>
                        <StyledField/>
                        <StyledField/>
                        <StyledField as={"textarea"}/>
                    </StyledForm>
                </FlexWrapper>
            </Container>
        </StyledSection>
    );
};

type StyledFormProps = {
    flexbox: boolean,
}

const StyledForm = styled.form<StyledFormProps>`
  max-width: 540px;
  width: 100%;
  ${props => props.flexbox && css<FlexWrapperPropsType>`
    display: flex;
    flex-direction: column;
    align-items: center;
  `
  }
`

const StyledField = styled.input`
  width: 100%;

  &:not(:nth-last-child(1)) {
    margin-bottom: 10px;
  }
`

