import React from 'react';
import {StyledSection} from "../../../components/section/Section";
import SectionHeader from "../../../components/headers/SectionHeader";

export const Contact = (props: { headerName: string }) => {
    return (
        <StyledSection>
            <SectionHeader text={props.headerName} mb={'62px'}/>

        </StyledSection>
    );
};