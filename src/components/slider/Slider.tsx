import React from 'react';
import {StyledParagraph} from "../paragraph";
import styled from "styled-components";
import theme from "../../styles/Theme.Styled";
import FlexWrapper from "../flexWrapper/FlexWrapper";

type SliderPropsType = {
    paragraphText: string,
    spanText: string,
}

export const Slider = (props: SliderPropsType) => {
    return (
        <StyledSlider direction={'column'} align={'center'}>
            <Slide justify={'center'}
                   direction={'column'}
                   mb={'42px'}
            >
                <StyledParagraph maxWidth={'500px'}
                                 maxHeight={'63px'}
                                 clamp={'3'}
                                 mb={'22px'}
                >
                    {props.paragraphText}
                </StyledParagraph>
                <StyledSpan>
                    {props.spanText}
                </StyledSpan>
            </Slide>
            <Pagination>
                <span></span>
                <span className={'active'}></span>
                <span></span>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled(FlexWrapper)`
    
`

const Slide = styled(FlexWrapper)``


const StyledSpan = styled.span`
  text-align: center;
  font-family: ${theme.fonts.JosefinSans};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
`


const Pagination = styled.div`
  
  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, .5);

    & + span {
      margin-left: 5px;
    }
    
    &.active{
      background-color: ${theme.colors.accent};
      width: 25px;
    }
  }
`
