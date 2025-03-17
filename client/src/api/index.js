import axios from 'axios';
const apiURL = import.meta.env.VITE_API_URL;

const api = axios.create({
    baseURL : apiURL,
    headers : {
        'Content-Type' : 'application/json',
    }
})

api.interceptors.request.use((config) => {
    if(config.data instanceof FormData) {
        delete config.headers['Content-Type'];
    }
    return config;
})

export default api;