import {axiosServices} from "./axios.services";
import {urls} from "../constants";

const postServices = {
    getAll: () => axiosServices.get(urls.posts)
}

export {
    postServices
}