import React from "react";
import CategoriesList from "../components/cetegoriesList/categoriesList";
import Footer from "../components/header/footer/footer";
import Header from "../components/header/header";
import PropTypes from "prop-types";

const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            <CategoriesList />
            {children}
            <Footer />
        </>
    );
};
MainLayout.propTypes = {
    children: PropTypes.node
};
export default MainLayout;
