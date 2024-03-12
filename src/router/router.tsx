import {createBrowserRouter} from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import Error from "../components/common/Error";
import Signup from "../pages/Signup";
import ResetPassword from "../pages/ResetPassword";
import Login from "../pages/Signin";
import Books from "../pages/Books";
import BookDetail from "../pages/BookDetail";
import Cart from "../pages/Cart";
import Order from "../pages/Order";
import OrderList from "../pages/OrderList";

const routeList = [
    {path: "/", element: <Home/>},
    {path: "/books", element: <Books/>},
    {path: "/signup", element: <Signup/>},
    {path: "/reset-password", element: <ResetPassword/>},
    {path: "/signin", element: <Login/>},
    {path: "/book/:bookId", element: <BookDetail/>},
    {path: "/cart", element: <Cart/>},
    {path: "/order", element: <Order/>},
    {path: "/order/list", element: <OrderList/>}
].map((it) => {
    return {
        ...it,
        element: <Layout>{it.element}</Layout>,
        errorElement: <Error/>
    };
});

export const router = createBrowserRouter(routeList);