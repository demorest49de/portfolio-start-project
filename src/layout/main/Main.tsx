import React from 'react';
import Hero from '../sections/hero/Hero';
import {Skills} from "../sections/skills/Skills";
import {Work} from '../sections/works/Work';

const Main = (props: { items: string[] }) => {

    const itemsObj: { [index: string]: any } = {};

    props.items.forEach((item) =>
        itemsObj[`${item}`] = item)

    console.log(' itemsObj: ', itemsObj);
    return (
        <main>
            <Hero/>
            <Skills/>
            <Work/>
            {/*<Testimony/>*/}
            {/*<Contact/>*/}
        </main>
    );
};

export default Main;

