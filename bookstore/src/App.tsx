//import React from 'react';
//import './App.css';

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Layout from "./components/layout/Layout";
import {BookStoreThemeProvider} from "./context/themeContext";

function App() {
    return (
        <BookStoreThemeProvider>
                <Layout>
                    <Home/>
                    <Detail/>
                </Layout>
        </BookStoreThemeProvider>

    );
}

export default App;
