// import { nanoid } from "nanoid";
// import getRandomInt from "../../../utils/getRandomInt";

// const setsNames = [
//     "Сет Нигири 16 шт",
//     "Вегетарианский сет",
//     "Сет Нигири 25 шт",
//     "Филадельфия фри"
// ];
// const setsCompositions = [
//     "Сибас с соусом умебоши 2 шт Лосось ментайко-тобико 2шт",
//     "Острая чоризо, соус барбекю, томаты, красный лук, моцарелла, томатный соус",
//     "Бекон, цыпленок, ветчина, сыр блю чиз, сыры чеддер и пармезан, соус песто",
//     "Мясной соус болоньезе, соус бургер, соленые огурчики, лук, мацарелла",
//     "Рис, нори, лук фри, сыр сливочный, помидор, перец болгарский, лосось",
//     "Курица, сыр моцарелла, ананасы, ветчина, кукуруза"
// ];

// const sets = setsNames.map((el) => ({
//     id: nanoid(),
//     name: el,
//     price: getRandomInt(400, 600),
//     composition: setsCompositions[getRandomInt(0, setsCompositions.length - 1)],
//     weight: "450гр 150ккал / 100гр"
// }));

const fetchAll = () =>
    new Promise((resolve, reject) => {
        window.setTimeout(function () {
            // resolve({
            //     categoryId: nanoid(),
            //     products: combo
            // });
            reject(
                new Error("sets")
            );
        }, 2000);
    });

export default {
    fetchAll
};
