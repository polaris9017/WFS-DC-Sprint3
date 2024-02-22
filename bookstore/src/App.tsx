//import React from 'react';
//import './App.css';

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Layout from "./components/layout/Layout";
import ThemeSwitcher from "./components/header/ThemeSwitcher";
import {BookStoreThemeProvider} from "./context/themeContext";

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
