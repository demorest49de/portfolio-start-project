import React from 'react';
import styled from "styled-components";


type ParagraphPropsType = {
    fontSize?: string,
    fontWeight?: string,
    textAlign?: string,
    maxWidth?: string,
    maxHeight?: string,
    clamp?: string,
    mb?: string,
}

export const StyledParagraph = styled.p<ParagraphPropsType>`
  font-size: ${props => props.fontSize || '14px'};
  font-weight: ${props => props.fontWeight || '400'};
  text-align: ${props => props.textAlign || 'center'};
  max-width: ${props => props.maxWidth || 'unset'};
  max-height: ${props => props.maxHeight || 'unset'};
  width: 100%;
  height: 100%;


  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${props => props.clamp || 'unset'};

  margin-bottom: ${props => props.mb || 'unset'};
}
`