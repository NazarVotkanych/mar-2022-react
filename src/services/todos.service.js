import {axiosService} from "./axios";
import {urls} from "./urls";

export const urlService = {
    getTodos: () => axiosService.get(urls.todos).then(value => value.data),
}
