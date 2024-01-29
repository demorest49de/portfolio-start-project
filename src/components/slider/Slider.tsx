import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styled from "styled-components";
import FlexWrapper from "../flexWrapper/FlexWrapper";
import {Slide} from './Slide';
import './../../styles/slider.scss'

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


const StyledSlider = styled(FlexWrapper)`
  max-width: 500px;
  width: 100%;
`

// //
// // const Pagination = styled.div`
//
//   span {
//     display: inline-block;
//     width: 10px;
//     height: 10px;
//     border-radius: 20px;
//     background-color: rgba(255, 255, 255, .5);
//
//     & + span {
//       margin-left: 5px;
//     }
//
//     &.active {
//       background-color: ${theme.colors.accent};
//       width: 25px;
//     }
//   }
// `