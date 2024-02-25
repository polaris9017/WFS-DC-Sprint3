//import React from 'react';
//import './App.css';

import {BookStoreThemeProvider} from "./context/themeContext";
import {RouterProvider} from "react-router-dom";
import {router} from "./router/router";


function App() {
    return (
        <BookStoreThemeProvider>
            <RouterProvider router={router}/>
        </BookStoreThemeProvider>
    );
}

export default App;
