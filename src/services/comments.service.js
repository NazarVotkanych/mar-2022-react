import {axiosService} from "./axios";
import {urls} from "./urls";

export const urlService = {
    getAllComments: () => axiosService.get(urls.comments).then(value => value.data),
}