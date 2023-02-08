import { nanoid } from "nanoid";
import getRandomInt from "../../../utils/getRandomInt";

const rollsNames = [
    "Чикен-спайси",
    "Курица терияки",
    "Ролл Аморе",
    "Филадельфия фри"
];
const rollsCompositions = [
    "Ветчина, ананасы, моцарелла, томатный соус",
    "Сладкий перец, соус Бургер, халапеньо, курица, кукуруза, томаты",
    "Огурцы, ветчина, сыр моцарелла, соус чесночный",
    "Мясной соус болоньезе, соус бургер, соленые огурчики, лук, мацарелла"
];

const rolls = rollsNames.map((el) => ({
    id: nanoid(),
    name: el,
    price: getRandomInt(400, 600),
    composition:
    rollsCompositions[getRandomInt(0, rollsCompositions.length - 1)],
    weight: "450гр 150ккал / 100гр"
}));

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve({
                category: "rolls",
                products: rolls
            });
        }, 2000);
    });

export default {
    fetchAll
};
