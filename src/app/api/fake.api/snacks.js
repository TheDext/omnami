import { nanoid } from "nanoid";
import getRandomInt from "../../../utils/getRandomInt";

const snacksNames = [
    "Креветки в сухарях",
    "Картошка Фри",
    "Куриные крылышки",
    "Мидии с соусе"
];
const snacksCompositions = [
    "Ветчина, ананасы, моцарелла, томатный соус",
    "Сладкий перец, соус Бургер, халапеньо, курица, кукуруза, томаты",
    "Огурцы, ветчина, сыр моцарелла, соус чесночный",
    "Мясной соус болоньезе, соус бургер, соленые огурчики, лук, мацарелла",
    "Томатный соус, сыр моцарелла, болгарский перец, ветчина, помидоры",
    "Курица, сыр моцарелла, ананасы, ветчина, кукуруза"
];

const snacks = snacksNames.map((el) => ({
    id: nanoid(),
    name: el,
    price: getRandomInt(400, 600),
    composition:
        snacksCompositions[getRandomInt(0, snacksCompositions.length - 1)],
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