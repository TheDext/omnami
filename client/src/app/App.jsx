import "./App.scss";
import React, { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getIsLoggedIn, loadUserData } from "./store/users";
import MainPage from "./components/pages/mainPage";
import Profile from "./components/pages/profile/profile";
import Cart from "./components/pages/cart/cart";
import Ordering from "./components/pages/ordering/ordering";
import ProtectedRoute from "./components/ProtectedRoute";
import CategoryPage from "./components/pages/categoryPage/categoryPage";
import ProductPage from "./components/pages/productPage/productPage";
import getCategories from "./utils/getCategories";

function App() {
    const location = useLocation();
    const currentCategory = getCategories().find(
        (obj) => obj.path === location.pathname.slice(1)
    );

    const isLoggedIn = useSelector(getIsLoggedIn());
    const dispatch = useDispatch();
    useEffect(() => {
        if (isLoggedIn) {
            dispatch(loadUserData());
        }
    }, [isLoggedIn]);
    return (
        <>
            <Routes>
                <Route path="" element={<MainPage />} />
                <Route path="cart" element={<Cart />} />
                <Route path="ordering" element={<Ordering />} />
                <Route path="product">
                    <Route path="" element={<Navigate to="/" />} />
                    <Route path=":productId" element={<ProductPage />} />
                </Route>

                <Route
                    path={currentCategory && currentCategory.path}
                    element={<CategoryPage currentCategory={currentCategory} />}
                />

                <Route
                    path="profile"
                    element={
                        <ProtectedRoute>
                            <Profile />
                        </ProtectedRoute>
                    }
                />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    );
}

export default App;
