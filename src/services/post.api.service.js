import {axiosService} from "./axios.service";
import {urls} from "./urls";

export const postService = {
    getByUserId:(id)=>axiosService.get(`${urls.posts}?userId=${id}`).then(value => value.data)

}