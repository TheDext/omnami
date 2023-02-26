import { useEffect, useState } from "react";
import httpService from "../services/http.service";
import combo from "../mockData/combo.json";
import pizza from "../mockData/pizza.json";
import rolls from "../mockData/rolls.json";
import sets from "../mockData/sets.json";
import snacks from "../mockData/snacks.json";
import products from "../mockData/products.json";

const useMockData = () => {
    const statusConsts = {
        idle: "Not Started",
        pending: "In Process",
        successed: "Ready",
        error: "Error occurred"
    };
    const [error, setError] = useState(null);
    const [status, setStatus] = useState(statusConsts.idle);
    const [progress, setProgress] = useState(0);
    const [count, setCount] = useState(0);
    const summaryCount =
        combo.length +
        pizza.length +
        rolls.length +
        sets.length +
        snacks.length;
    const incrementCount = () => {
        setCount((prevState) => prevState + 1);
    };
    const updateProgress = () => {
        if (count !== 0 && status === statusConsts.idle) {
            setStatus(statusConsts.pending);
        }
        const newProgress = Math.floor((count / summaryCount) * 100);
        if (progress < newProgress) {
            setProgress(() => newProgress);
        }
        if (newProgress === 100) {
            setStatus(statusConsts.successed);
        }
    };

    useEffect(() => {
        updateProgress();
    }, [count]);
    async function initialize() {
        try {
            for (const c of combo) {
                await httpService.put("combo/" + c._id, c);
                incrementCount();
            }
            for (const p of pizza) {
                await httpService.put("pizza/" + p._id, p);
                incrementCount();
            }
            for (const r of rolls) {
                await httpService.put("rolls/" + r._id, r);
                incrementCount();
            }
            for (const s of sets) {
                await httpService.put("sets/" + s._id, s);
                incrementCount();
            }
            for (const s of snacks) {
                await httpService.put("snacks/" + s._id, s);
                incrementCount();
            }
            for (const p of products) {
                await httpService.put("products/" + p._id, p);
                incrementCount();
            }
        } catch (error) {
            setError(error);
            setStatus(statusConsts.error);
        }
    }

    return { error, initialize, progress, status };
};

export default useMockData;
