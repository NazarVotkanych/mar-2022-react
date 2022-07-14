import {axiosService} from "./axios";
import {urls} from "./urls";

export const urlService = {
    getByID: (id) => axiosService.get(`${urls.posts}/${id}`).then(value => value.data),
}