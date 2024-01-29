import React, {ReactNode} from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styled from "styled-components";
import FlexWrapper from "../flexWrapper/FlexWrapper";
import {Slide} from './Slide';
import './../../styles/slider.scss'
import Icon from "../Icon/Icon";

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

const sliderBtnHeight = 66;

const renderPrevButton = ({isDisabled}: { isDisabled?: boolean | undefined }) => {
    return <span className={'prev-btn-span'} style={
        {
            opacity: isDisabled ? '0.5' : 1,
        }}>
        <Icon
            iconId={"slider-prev-button"}
            width={"34"}
            height={"66"}
            color={"#af05db"}
        />
    </span>;
};


const renderNextButton = ({isDisabled}: { isDisabled?: boolean | undefined }) => {
    return <span className={'next-btn-span'}
                 style={{
                     opacity: isDisabled ? '0.5' : 1,
                 }}>
        <Icon
            iconId={"slider-next-button"}
            width={"34"}
            height={`${sliderBtnHeight}`}
            color={"#af05db"}
        />
    </span>;
};
//
// const renderPlayPauseButton = ({ isPlaying }) => {
//     return isPlaying ? 'PAUSE' : 'PLAY';
// };


export const Slider: React.FC = () => (
    <StyledSlider direction={'column'} align={'center'}>

        <AliceCarousel
            items={items}
            mouseTracking
            renderPrevButton={renderPrevButton}
            renderNextButton={renderNextButton}
            // renderPlayPauseButton={renderPlayPauseButton}

        />

    </StyledSlider>
);


const StyledSlider = styled(FlexWrapper)`
  max-width: 500px;
  padding: 0 33px;
  width: 100%;
`