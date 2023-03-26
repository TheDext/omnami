import httpService from "./http.service";

const commentEndpoint = "comment/";

const commentService = {
    getCommentByProductId: async (productId) => {
        const { data } = await httpService.get(commentEndpoint + productId);
        return data.content;
    },
    create: async (comment) => {
        const { data } = await httpService.post(commentEndpoint, comment);
        return data.content;
    },
    delete: async (commentId) => {
        const { data } = await httpService.delete(commentEndpoint + commentId);
        return data.content;
    }
};
export default commentService;
