const sumСalculation = (products) =>
    products.reduce((acc, { price, count }) => acc + count * price, 0);

export default sumСalculation;
