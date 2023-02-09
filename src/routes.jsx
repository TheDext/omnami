import React from "react";
import Test from "./app/components/test";
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
        path: "test",
        element: <Test />
    }
];
export default routes;
