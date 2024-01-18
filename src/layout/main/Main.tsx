import React from 'react';
import Hero from '../sections/hero/Hero';
import {Skills} from "../sections/skills/Skills";
import {Works} from '../sections/works/Works';

const Main = (props: { menuItems: string[] }) => {

    const itemsObj: { [index: string]: string } = {};

    props.menuItems.forEach((item) =>
        itemsObj[`${item}`] = item)

    console.log(' itemsObj: ', itemsObj);
    return (
        <main>
            <Hero headerName={itemsObj.Home}/>
            <Skills headerName={itemsObj.Skills}/>
            <Works headerName={itemsObj.Works}/>
            {/*<Testimony/>*/}
            {/*<Contact/>*/}
        </main>
    );
};

export default Main;

