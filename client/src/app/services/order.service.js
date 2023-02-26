import httpService from "./http.service";
// import localStorageService from "./localStorage.service";

const orderEndpoint = "order/";

const orderService = {
    get: async (userId) => {
        const { data } = await httpService.get(orderEndpoint + userId);
        return data;
    },
    create: async (payload) => {
        const { data } = await httpService.post(orderEndpoint, payload);
        return data;
    }
};
export default orderService;
