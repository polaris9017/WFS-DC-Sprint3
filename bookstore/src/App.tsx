//import React from 'react';
//import './App.css';

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Layout from "./components/layout/Layout";
import {GlobalStyle} from "./style/global";
import {ThemeProvider} from "styled-components";
import {dark, getTheme, light, ThemeName} from "./style/theme";
import ThemeSwitcher from "./components/header/ThemeSwitcher";
import {useContext, useState} from "react";
import {BookStoreThemeProvider, ThemeContext} from "./context/themeContext";

function App() {
    return (
        <BookStoreThemeProvider>
                <ThemeSwitcher />
                <Layout>
                    <Home/>
                    <Detail/>
                </Layout>
        </BookStoreThemeProvider>

    );
}

export default App;
