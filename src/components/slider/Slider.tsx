import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {StyledParagraph} from "../paragraph";
import styled from "styled-components";
import theme from "../../styles/Theme.Styled";
import FlexWrapper from "../flexWrapper/FlexWrapper";

type sliderPropsType = {
    text: string,
    author: string,
}


const Slide = (props: sliderPropsType) => {
    return (
        <FlexWrapper justify={'center'}
                     direction={'column'}
                     mb={'42px'}
        >
            <StyledParagraph
                maxHeight={'63px'}
                clamp={'3'}
                mb={'22px'}
            >
                {props.text}
            </StyledParagraph>
            <StyledSpan>
                {props.author}
            </StyledSpan>
        </FlexWrapper>
    )
}
const lorem20 = `Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit.
             Ab dolor exercitationem,
              itaque ratione sequi sunt ullam 
              voluptatibus. Illum, iusto, perferendis?`

const items = [
    <Slide text={lorem20 + ` 1`}
           author={'ivan ivanov'}
    />,
    <Slide text={lorem20 + ` 2`}
           author={'petr petrov'}
    />,
    <Slide text={lorem20 + ` 3`}
           author={'sidor sidorov'}
    />,
];

export const Slider: React.FC = () => (
    <StyledSlider direction={'column'} align={'center'}>
        <AliceCarousel
            mouseTracking
            items={items}
        />
    </StyledSlider>
);


// import React from 'react';
// import {StyledParagraph} from "../paragraph";
// import styled from "styled-components";
// import theme from "../../styles/Theme.Styled";
// import FlexWrapper from "../flexWrapper/FlexWrapper";

// type SliderPropsType = {
//     paragraphText: string,
//     spanText: string,
// }

// export const Slider: React.FC<SliderPropsType> = (props: SliderPropsType) => {
//     return (
//         <StyledSlider direction={'column'} align={'center'}>
//             <Slide justify={'center'}
//                    direction={'column'}
//                    mb={'42px'}
//             >
//                 <StyledParagraph maxWidth={'500px'}
//                                  maxHeight={'63px'}
//                                  clamp={'3'}
//                                  mb={'22px'}
//                 >
//                     {props.paragraphText}
//                 </StyledParagraph>
//                 <StyledSpan>
//                     {props.spanText}
//                 </StyledSpan>
//             </Slide>
//             <Pagination>
//                 <span></span>
//                 <span className={'active'}></span>
//                 <span></span>
//             </Pagination>
//         </StyledSlider>
//     );
// };

const StyledSlider = styled(FlexWrapper)`
  max-width: 500px;
  width: 100%;
`

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

    &.active {
      background-color: ${theme.colors.accent};
      width: 25px;
    }
  }
`
