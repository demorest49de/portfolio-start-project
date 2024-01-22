import {Header} from "./layout/header/Header";
import React from "react";
import Main from "./layout/main/Main";
import {Footer} from "./layout/footer/Footer";
import styled from "styled-components";

const menuItems = ["Hero", "Skills", "Works", "Testimony", "Contact"];

function App() {
    return (
        <StyledApp className="App">
            <h1 className={"visually-hidden"}>Web Developer, Svetlana Dyablo, promo page</h1>
            <Header menuItems={menuItems}/>
            <Main menuItems={menuItems}/>
            <Footer/>
        </StyledApp>
    );
}

export default App;

const StyledApp = styled.div`
  position: relative;
`