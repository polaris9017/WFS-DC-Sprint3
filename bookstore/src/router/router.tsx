import {createBrowserRouter} from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import Error from "../components/common/Error";
import Signup from "../pages/Signup";
import ResetPassword from "../pages/ResetPassword";
import Login from "../pages/Signin";
import Books from "../pages/Books";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout><Home/></Layout>,
        errorElement: <Layout><Error/></Layout>
    }, {
        path: "/books",
        element: <Layout><Books/></Layout>
    }, {
        path: "/signup",
        element: <Layout><Signup/></Layout>
    }, {
        path: "/reset-password",
        element: <Layout><ResetPassword/></Layout>
    }, {
        path: "/signin",
        element: <Layout><Login/></Layout>
    }
]);