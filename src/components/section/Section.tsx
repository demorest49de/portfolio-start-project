import React from 'react';
import styled from 'styled-components';

const Section = (props: { id: string, class: string }) => {
    return (
        <section id={props.id} className={props.class}>

        </section>
    );
};

export default Section;