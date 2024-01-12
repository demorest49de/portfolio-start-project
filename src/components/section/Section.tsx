import React, {ReactNode} from 'react';

const Section = (props: { id: string, class: string, children: ReactNode }) => {
    return (
        <section id={props.id} className={props.class}>
            {props.children}
        </section>
    );
};

export default Section;