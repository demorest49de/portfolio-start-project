import {Header} from "./layout/header/Header";
import React from "react";
import Main from "./layout/main/Main";
import styled from "styled-components";

const items = ["Home", "Skills", "Works", "Testimony", "Contact"];
function App() {
    return (
        <div className="App">
            <h1 className={"visually-hidden"}>Web Developer, Svetlana Dyablo, promo page</h1>
            <Header items={items}/>
            <Main items={items}/>
            {/*   Footer */}
        </div>
    );
}

export default App;

const SMainHeaderOne = styled.h1`
    
`