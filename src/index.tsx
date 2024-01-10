import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {GlobalStyles} from "./components/globalstyles/GlobalStyles";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <GlobalStyles/>
        <App/>
    </React.StrictMode>
);
