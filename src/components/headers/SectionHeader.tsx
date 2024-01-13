import React from 'react';
import styled from "styled-components";
import myTheme from "../../styles/Theme.Styled";
import FlexWrapper from "../flexWrapper/FlexWrapper";

const SectionHeader = (props: { text: string }) => {
    return (
        <FlexWrapper justify={'center'} direction={"column"} align={'center'}>
            <SH2>
                {props.text}
            </SH2>
            <SUnderline/>
        </FlexWrapper>
    )
};

const SUnderline = styled.div`
  width: 55px;
  height: 1px;
  background-color: ${myTheme.colors.pink};
  margin-bottom: 80px;
`

const SH2 = styled.h2`
  font-family: ${myTheme.fonts.JosefinSans};
  font-size: 36px;
  letter-spacing: 3px;
  font-weight: ${myTheme.fontWeight.bold};
  margin-bottom: 30px;
`

export default SectionHeader;