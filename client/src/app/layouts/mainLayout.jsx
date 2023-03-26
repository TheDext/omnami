import React, { useEffect, useState } from "react";
import CategoriesList from "../components/cetegoriesList/categoriesList";
import Header from "../components/header/header";
import PropTypes from "prop-types";
import Footer from "../components/footer/footer";
import { useInView } from "react-intersection-observer";
import { useMatchMedia } from "../hooks/useMathcMedia";

const MainLayout = ({ children }) => {
    const { ref: pageBody, inView } = useInView();
    const [isHide, setIsHide] = useState(false);
    const { isMobile } = useMatchMedia();

    useEffect(() => {
        if (inView) {
            setIsHide(false);
        } else {
            setIsHide(true);
        }
    }, [inView]);
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);

    return (
        <>
            <div className="wrapper">
                <div className="_main-layout-header">
                    <Header />
                    <CategoriesList isHide={isHide} />
                </div>
                <div className="_main-layout-body">
                    <div ref={pageBody}></div>
                    {children}
                </div>
                <div className="_main-layout-footer">
                    <Footer isMobile={isMobile} />
                </div>
            </div>
        </>
    );
};
MainLayout.propTypes = {
    children: PropTypes.node
};
export default MainLayout;
