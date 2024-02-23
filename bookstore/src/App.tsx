//import React from 'react';
//import './App.css';

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Layout from "./components/layout/Layout";
import {BookStoreThemeProvider} from "./context/themeContext";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Error from "./components/common/Error";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout><Home/></Layout>,
        errorElement: <Layout><Error/></Layout>
    }, {
        path: "/books",
        element: <Layout>
            <div>도서 목록</div>
        </Layout>
    }, {
        path: "/signup",
        element: <Layout><Signup/></Layout>
    }, {
        path: "/reset-password",
        element: <Layout><ResetPassword/></Layout>
    }
]);

function App() {
    return (
        <BookStoreThemeProvider>
            <RouterProvider router={router}/>
        </BookStoreThemeProvider>
    );
}

export default App;
