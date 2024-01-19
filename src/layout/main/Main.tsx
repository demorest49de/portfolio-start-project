import React from 'react';
import Hero from '../sections/hero/Hero';
import {Skills} from "../sections/skills/Skills";
import {Works} from '../sections/works/Works';
import {Testimony} from "../sections/testimony/Testimony";

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
            <Testimony headerName={itemsObj.Testimony} paragraphText={`
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci amet, commodi consectetur corporis cum, distinctio dolorem, doloribus earum enim est fugit harum impedit molestias nam quaerat qui voluptate! Eligendi!
               `}
            spanText={'@ivan ivanow'}
            />
            {/*<Contact/>*/}
        </main>
    );
};

export default Main;

