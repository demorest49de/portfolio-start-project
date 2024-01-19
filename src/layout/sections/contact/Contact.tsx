import React from 'react';
import {StyledSection} from "../../../components/section/Section";
import SectionHeader from "../../../components/headers/SectionHeader";
import styled, {css} from 'styled-components';
import FlexWrapper, {FlexWrapperPropsType} from "../../../components/flexWrapper/FlexWrapper";
import {Container} from "../../../components/container/Container";
import {Button} from "../../../components/button/Button";

export const Contact = (props: { headerName: string }) => {
    return (
        <StyledSection id={props.headerName}>
            <Container>
                <SectionHeader text={props.headerName} mb={'62px'}/>
                <FlexWrapper justify={'center'} >
                    <StyledForm flexbox={true}>
                        <StyledField placeholder={'name'}/>
                        <StyledField placeholder={'subject'}/>
                        <StyledField placeholder={'message'} as={"textarea"}/>
                        <Button type={'submit'}>Send message</Button>
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

  ${props => props.flexbox && css<StyledFormProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
  `
  }
  
  textarea {
    margin-bottom: 35px;
  }
`

const StyledField = styled.input`
  width: 100%;
  max-height: 32px;
  height: 100%;

  &:not(:nth-last-child(2)) {
    margin-bottom: 16px;
  }

`

