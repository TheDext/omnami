import React from "react";
import Test from "./components/test";
import AuthLayout from "./layouts/authLayout/authLayout";
import MainLayout from "./layouts/mainLayout";

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
        path: "test",
        element: <Test />
    }
];
export default routes;
