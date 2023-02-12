import { nanoid } from "nanoid";
import getRandomInt from "../../utils/getRandomInt";

const snacksNames = [
    "Креветки в кляре",
    "Наггетсы",
    "Луковые кольца",
    "Картофель фри",
    "Картофель по-деревенски"
];
const snacksCompositions = [
    "Тигровые креветики жареные в темпуре",
    "Куриные наггетсы в панировке",
    "Луковые кольца в панировке",
    "Картофель фри",
    "Картофельные дольки со специями"
];

const snacks = snacksNames.map((el, i) => ({
    id: nanoid(),
    name: el,
    price: getRandomInt(400, 600),
    composition: snacksCompositions[i],
    weight: "450гр 150ккал / 100гр"
}));

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve({
                category: "snacks",
                products: snacks
            });
        }, 2000);
    });

export default {
    fetchAll
};
