import "./App.scss";
import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "../routes";
import AppLoader from "./components/appLoader";

function App() {
    const elements = useRoutes(routes);
    return (
        <div className="wrapper">
            <AppLoader>{elements}</AppLoader>
        </div>
    );
}

export default App;
