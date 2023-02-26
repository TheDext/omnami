import { nanoid } from "nanoid";
import getRandomInt from "../../utils/getRandomInt";

const comboNames = [
    "Комбо 1",
    "Комбо 2",
    "Комбо 3",
    "Комбо 4",
    "Комбо 5",
    "Комбо 5",
    "Комбо 5",
    "Комбо 5",
    "Комбо 5",
    "Комбо 5",
    "Комбо 5",
    "Комбо 6",
    "Комбо 7",
    "Комбо 8"
];
const comboCompositions = [
    "2 пиццы 33 см (на выбор), картофель фри или по-деревенски (на выбор)",
    "Сладкий перец, соус Бургер, халапеньо, курица, кукуруза, томаты",
    "Огурцы, ветчина, сыр моцарелла, соус чесночный",
    "Мясной соус болоньезе, соус бургер, соленые огурчики, лук, мацарелла",
    "Томатный соус, сыр моцарелла, болгарский перец, ветчина, помидоры",
    "Курица, сыр моцарелла, ананасы, ветчина, кукуруза"
];

const combo = comboNames.map((el) => ({
    id: nanoid(),
    name: el,
    price: getRandomInt(400, 600),
    composition:
        comboCompositions[getRandomInt(0, comboCompositions.length - 1)],
    weight: "450гр 150ккал / 100гр"
}));

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(combo);
        }, 2000);
    });

const getPart = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(combo.slice(0, 5));
        }, 1000);
    });

const getOneProduct = (index) => {
    if (index > combo.length) return;
    return new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(combo[index]);
        }, 2000);
    });
};

export default {
    fetchAll,
    getPart,
    getOneProduct
};
