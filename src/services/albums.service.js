import {axiosService} from "./axios";
import {urls} from "./urls";

export const urlService = {
    getAlbums: () => axiosService.get(urls.albums).then(value => value.data),
}