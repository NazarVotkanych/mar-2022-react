import axios from "axios";


const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users'
});

const createUser = (user) => axiosInstance.post('', user);

export {createUser}