import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
// import './index.css';
import App from "./app/App";
import { createStore } from "./app/store/createStore";
// import reportWebVitals from './reportWebVitals';

const store = createStore();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

// reportWebVitals();
