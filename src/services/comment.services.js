import {axiosServices} from "./axios.services";
import {urls} from "../constants";


const commentServices = {
    getAll: () => axiosServices.get(urls.comments)
}
export {
    commentServices
}