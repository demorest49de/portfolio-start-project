import styled from 'styled-components';

export type FlexWrapperPropsType = {
    direction?: string,
    justify?: string,
    align?: string,
    wrap?: string,
    mb?: string,
    minHeight?: string,
    gap?: string,
}

const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  flex-direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justify || "flex-start"};
  align-items: ${props => props.align || "stretch"};
  flex-wrap: ${props => props.wrap || "nowrap"};
  min-height: ${props => props.minHeight || "unset"};
  gap: ${props => props.gap || "unset"};
  margin-bottom: ${props => props.mb || "unset"};
  
`

export default FlexWrapper;