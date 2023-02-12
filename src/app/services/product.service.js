import httpService from "./http.service";

let productEndpoing = "";
export const setProductEndpoint = (endpoint) => (productEndpoing = endpoint);
const productService = {
    fetchAll: async () => {
        const { data } = await httpService.get(productEndpoing);
        return data;
    }
};
export default productService;
