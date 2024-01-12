import React, {ReactElement} from 'react';
import styled from 'styled-components';

const Section = (props: { id: string, class: string, content: ReactElement }) => {
    return (
        <section id={props.id} className={props.class}>
            {props.content}
        </section>
    );
};

export default Section;