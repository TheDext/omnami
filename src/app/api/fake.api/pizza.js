import { nanoid } from "nanoid";
import getRandomInt from "../../utils/getRandomInt";

const pizzaNames = [
    "Гавайская",
    "Мексиканская",
    "Фермерская",
    "Грибная с сыром",
    "4 сыра",
    "Быстрая"
];
const pizzaCompositions = [
    "Ветчина, ананасы, моцарелла, томатный соус",
    "Сладкий перец, соус Бургер, халапеньо, курица, кукуруза, томаты",
    "Огурцы, ветчина, сыр моцарелла, соус чесночный",
    "Мясной соус болоньезе, соус бургер, соленые огурчики, лук, мацарелла",
    "Томатный соус, сыр моцарелла, болгарский перец, ветчина, помидоры",
    "Курица, сыр моцарелла, ананасы, ветчина, кукуруза"
];

const pizza = pizzaNames.map((el) => ({
    id: nanoid(),
    name: el,
    price: getRandomInt(400, 600),
    composition:
        pizzaCompositions[getRandomInt(0, pizzaCompositions.length - 1)],
    weight: "450гр 150ккал / 100гр"
}));

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve({
                category: "pizza",
                products: pizza
            });
        }, 2000);
    });

export default {
    fetchAll
};
