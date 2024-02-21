//import React from 'react';
//import './App.css';

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Layout from "./components/layout/Layout";
import {GlobalStyle} from "./style/global";
import {ThemeProvider} from "styled-components";
import {dark, light} from "./style/theme";

function App() {
    return (
        <>
            <ThemeProvider theme={light}>
                <GlobalStyle themeName='light'/>
                <Layout>
                    <Home/>
                    <Detail/>
                </Layout>
            </ThemeProvider>
        </>

    );
}

export default App;
