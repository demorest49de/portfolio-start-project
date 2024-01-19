import {StyledSection} from "../../../components/section/Section";
import {Container} from "../../../components/container/Container";
import SectionHeader from "../../../components/headers/SectionHeader";
import FlexWrapper from "../../../components/flexWrapper/FlexWrapper";
import {Button} from "../../../components/button/Button";
import React from "react";
import theme from "../../../styles/Theme.Styled";


export const HireMe = () => {
    return (
        <StyledSection id='HireMe' backGrColor={theme.backgroundColor.secondary}>
            <Container>
                <SectionHeader text={
                    "I Am Available For Freelance"
                } mb={'60px'}/>
                <FlexWrapper justify={'center'} >
                    <Button>Hire me</Button>
                </FlexWrapper>
            </Container>
        </StyledSection>
    );
};