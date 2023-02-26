import httpService from "./http.service";

const productService = {
    fetchAll: async (productEndpoing) => {
        const { data } = await httpService.get(
            `product?category=${productEndpoing}`
        );
        return data;
    },
    getById: async (productId) => {
        const { data } = await httpService.get(`product/${productId}`);
        return data;
    }
};
export default productService;
