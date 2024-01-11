import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {GlobalStyles} from "./styles/globalstyles/GlobalStyles";
import {ThemeProvider} from "styled-components";
import myTheme from "./styles/Theme.Styled";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <ThemeProvider theme={myTheme}>
        <GlobalStyles/>
        <App/>
    </ThemeProvider>
);
