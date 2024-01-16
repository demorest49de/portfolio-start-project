import React from 'react';
import styled from "styled-components";
import myTheme from "../../styles/Theme.Styled";
import FlexWrapper from "../flexWrapper/FlexWrapper";

type SectionHeaderPropsType = {
    text: string,
    mb: string,
}

const SectionHeader = (props: SectionHeaderPropsType) => {
    return (
        <FWSectionHeader justify={'center'} direction={"column"} align={'center'} mb={props.mb}>
            <SH2>
                {props.text}
            </SH2>
            <SUnderline/>
        </FWSectionHeader>
    )
};

const SUnderline = styled.div`
  width: 55px;
  height: 1px;
  background-color: ${myTheme.colors.pink};
`

const SH2 = styled.h2`
  font-family: ${myTheme.fonts.JosefinSans};
  font-size: 36px;
  letter-spacing: 3px;
  font-weight: ${myTheme.fontWeight.bold};
  margin-bottom: 30px;
`

const FWSectionHeader = styled(FlexWrapper)`
    margin-bottom: ${props => props.mb || "0px"}
    };
`

export default SectionHeader;