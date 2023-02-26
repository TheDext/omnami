import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsLoggedIn } from "../store/users";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children }) => {
    const isLoggedIn = useSelector(getIsLoggedIn());

    return !isLoggedIn ? <Navigate to="/" /> : children;
};

ProtectedRoute.propTypes = {
    children: PropTypes.node
};
export default ProtectedRoute;
