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
            <Hero headerName={itemsObj.Home}/>
            <Skills headerName={itemsObj.Skills}/>
            <Work headerName={itemsObj.Works}/>
            {/*<Testimony/>*/}
            {/*<Contact/>*/}
        </main>
    );
};

export default Main;

