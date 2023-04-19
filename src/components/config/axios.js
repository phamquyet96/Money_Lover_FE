import axios from "axios";
import jwt_decode from "jwt-decode";

const PORT = 8000;

export const myAxios = axios.create({
    baseURL: `http://localhost:${PORT}/api`
});

const refreshToken = async () => {
    try {
        const res = await myAxios.post('/auth/refresh', { token: localStorage.getItem('refreshToken') });
        localStorage.setItem('accessToken', res.data.accessToken)
        localStorage.setItem('refreshToken', res.data.refreshToken)
        return res.data;
    } catch (err) {
        console.log(err);
    }
}


export const axiosJWT = axios.create({
    baseURL: `http://localhost:${PORT}/api`
});
// axiosJWT.interceptors.request.use(
//     async (config) => {
//         let currentDate = new Date();
//         const decodedToken = jwt_decode(localStorage.getItem('accessToken'));
//         if (decodedToken.exp * 1000 < currentDate.getTime()) {
//             const data = await refreshToken();
//             config.headers['authorization'] = "Bearer " + data.accessToken;
//         } else {
//             config.headers['authorization'] = "Bearer " + localStorage.getItem('accessToken');
//         }
//         return config
//     }, (err) => {
//         return Promise.reject(err);
//     }
// );