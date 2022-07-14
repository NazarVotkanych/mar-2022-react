import axios from "axios";
import baseUrl from "../services/urls";

const axiosService = axios.create({baseURL:baseUrl});

export {axiosService}