import Axios from 'axios';
import qs from 'qs';
const axios = Axios.create({
    baseURL: 'https://xusdt.chuanmaolicai.com',
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    },
    withCredentials: true
});
axios.interceptors.request.use((config) => {
    if (config.method === 'post' &&
        config.headers['Content-Type'] === 'application/x-www-form-urlencoded;charset=UTF-8'
    ) {
        config.data = qs.stringify(config.data)
    }
    return config;
});
axios.interceptors.response.use(
    (response) => {
        let data = response.data;
        return data;
    },
    (error) => {
        return Promise.reject(error);
    }
);
export default axios;