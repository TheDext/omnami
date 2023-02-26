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

// const sleep = (ms) => {
//     return new Promise((resolve) => {
//         const data = "Promise_1";
//         setTimeout(() => {
//             resolve(data);
//         }, ms);
//     });
// };
// const sleep2 = (ms) => {
//     return new Promise((resolve, reject) => {
//         const data = "Promise_2";
//         setTimeout(() => {
//             reject(data);
//         }, ms);
//     });
// };

// const resData = Promise.allSettled([
//     sleep(1000),
//     sleep(1500),
//     sleep2(1000)
// ]).then((data) => console.log(data));

// console.log(resData);
