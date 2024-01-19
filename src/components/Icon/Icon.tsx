import React from 'react';
import iconsSprite from '../../assets/images/icons-sprite.svg'
import styled from "styled-components";
import theme from "../../styles/Theme.Styled";

type IconTypeProps = {
    iconId: string,
    width: string,
    height: string,
    rotate?: string,
}

const Icon = (props: IconTypeProps) => {
    return (
        <svg width={props.width}
             height={props.height}
             transform={`rotate(${props.rotate || '0'} 0 0)`}
             viewBox={`0 0 ${props.width} ${props.height}`} fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>
    );
};

export default Icon;