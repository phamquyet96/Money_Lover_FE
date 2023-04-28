import axios from "axios";
const PORT = 8000;

const myAxios = axios.create({
    baseURL: `http://localhost:${PORT}/api`
});

myAxios.interceptors.request.use(
    async (config) => {
        let token = localStorage.getItem('accessToken');
        console.log(token)
        if (token) {
            config.headers.Authorization = "Bearer " + token
        }
        return config
    }, (err) => {
        return Promise.reject(err);
    }
);

myAxios.interceptors.response.use(
    (res) => {
        return res;
    },
    async (err) => {
        const originalConfig = err.config;
        if (originalConfig.url !== "/auth/login" && err.response) {
            // Access Token was expired
            if ((err.response.status === 401 || err.response.status === 403) && !originalConfig._retry) {
                originalConfig._retry = true;

                try {
                    const res = await myAxios.post('/auth/refresh', {
                        token: localStorage.getItem('refreshToken')
                    });
                    const { accessToken, refreshToken } = res.data;
                    localStorage.setItem('accessToken', accessToken)
                    localStorage.setItem('refreshToken', refreshToken)
                    return myAxios(originalConfig);
                } catch (_error) {
                    return Promise.reject(_error);
                }
            }
        }
        return Promise.reject(err);
    }
)

export {myAxios};

