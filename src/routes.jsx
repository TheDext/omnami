import React from "react";
import Cart from "./app/components/pages/cart/cart";
import Ordering from "./app/components/pages/ordering/ordering";
import Profile from "./app/components/pages/profile/profile";
import AuthLayout from "./app/layouts/authLayout/authLayout";
import MainLayout from "./app/layouts/mainLayout";

const routes = [
    {
        path: "/",
        element: <MainLayout />
    },
    {
        path: "auth",
        element: <AuthLayout />
    },
    {
        path: "cart",
        element: <Cart />
    },
    {
        path: "profile",
        element: <Profile />
    },
    {
        path: "ordering",
        element: <Ordering />
    }
];
export default routes;
