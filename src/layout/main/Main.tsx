import React from 'react';
import Hero from '../sections/hero/Hero';
import {Skills} from "../sections/skills/Skills";
import { Work } from '../sections/works/Work';

const Main = () => {
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

