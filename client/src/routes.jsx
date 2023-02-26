import React from "react";
import { Navigate } from "react-router-dom";
import Cart from "./app/components/pages/cart/cart";
import CategoryPage from "./app/components/pages/categoryPage/categoryPage";
import MainPage from "./app/components/pages/mainPage";
import Ordering from "./app/components/pages/ordering/ordering";
import ProductPage from "./app/components/pages/productPage/productPage";
import Profile from "./app/components/pages/profile/profile";
import ProtectedRoute from "./app/components/ProtectedRoute";

const routes = [
    {
        path: "/",
        element: <MainPage />
    },
    {
        path: "cart",
        element: <Cart />
    },
    {
        path: "profile",
        element: (
            <ProtectedRoute>
                <Profile />
            </ProtectedRoute>
        )
    },
    {
        path: "ordering",
        element: <Ordering />
    },
    {
        path: "product",
        children: [
            {
                path: "",
                element: <Navigate to="/" />
            },
            {
                path: ":productId",
                element: <ProductPage />
            }
        ]
    },
    {
        path: "combo",
        element: <CategoryPage category="combo" />
    },
    {
        path: "rolls",
        element: <CategoryPage category="rolls" />
    },
    {
        path: "sets",
        element: <CategoryPage category="sets" />
    },
    {
        path: "pizza",
        element: <CategoryPage category="pizza" />
    },
    {
        path: "snacks",
        element: <CategoryPage category="snacks" />
    }
];
export default routes;
