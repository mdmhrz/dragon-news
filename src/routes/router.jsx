import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '',
                element: <Home></Home>
            },
            {
                path: 'category/:id',
                element: <CategoryNews></CategoryNews>,
                loader: () => fetch('/news.json')
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            },
        ]
    },
    {
        path: '/news',
        element: <h1>News Layout</h1>
    },
    {
        path: '/*',
        element: <h1>Eror 404</h1>
    },
])

export default router