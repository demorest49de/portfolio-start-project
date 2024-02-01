import {Header} from "./layout/header/Header";
import React from "react";
import Main from "./layout/main/Main";
import {Footer} from "./layout/footer/Footer";
import styled from "styled-components";
import {Particle} from "./components/particle/Particle";
import Particles from "react-tsparticles";

const menuItems = ["Hero", "Skills", "Works", "Testimony", "Contact"];

function App() {
    return (
        <StyledApp className="App">
            <Particle />

            <h1 className={"visually-hidden"}>Web Developer, Svetlana Dyablo</h1>
            <Header menuItems={menuItems}/>
            <Main menuItems={menuItems}/>
            <Footer/>
        </StyledApp>
    );
}

const StyledParticle = styled(Particles)`
  height: 100vh;
  //position: absolute;
`


export default App;

const StyledApp = styled.div`
  position: relative;
`