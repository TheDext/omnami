import { nanoid } from "nanoid";
import getRandomInt from "../../../utils/getRandomInt";

const wokNames = [
    "Удон с овощами в пикантном соусе",
    "Карбонара по-азиатски",
    "Острый",
    "Диетический"
];
const wokCompositions = [
    "Острая чоризо, соус барбекю, томаты, красный лук, моцарелла, томатный соус",
    "Сладкий перец, соус Бургер, халапеньо, курица, кукуруза, томаты",
    "Огурцы, ветчина, сыр моцарелла, соус чесночный",
    "Бекон, цыпленок, ветчина, сыр блю чиз, сыры чеддер и пармезан, соус песто, кубики брынзы, томаты черри..",
    "Томатный соус, сыр моцарелла, болгарский перец, ветчина, помидоры",
    "Курица, сыр моцарелла, ананасы, ветчина, кукуруза"
];

const wok = wokNames.map((el) => ({
    id: nanoid(),
    name: el,
    price: getRandomInt(400, 600),
    composition: wokCompositions[getRandomInt(0, wokCompositions.length - 1)],
    weight: "450гр 150ккал / 100гр"
}));

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve({
                category: "wok",
                products: wok
            });
        }, 2000);
    });

export default {
    fetchAll
};
