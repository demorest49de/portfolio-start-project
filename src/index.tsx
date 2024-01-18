import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {GlobalStyles} from "./styles/GlobalStyles";
import {ThemeProvider} from "styled-components";
import theme from "./styles/Theme.Styled";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <App/>
    </ThemeProvider>
);
