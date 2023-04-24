import axios from "axios";
import jwt_decode from "jwt-decode";

const PORT = 8000;

const myAxios = axios.create({
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
myAxios.interceptors.request.use(
    async (config) => {
       // let currentDate = new Date();
        // const decodedToken = jwt_decode(localStorage.getItem('accessToken'));
         //const timeLifeToken = decodedToken.exp * 1000;
       //  const timeCurrent = Date.now();
      //  console.log(timeCurrent, timeLifeToken)
        let token = localStorage.getItem('accessToken');
        if (token) {
            myAxios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('accessToken')
        }
        console.log(myAxios.defaults.headers.common)
        //
        // if (timeLifeToken < timeCurrent) {
        //     const data = await refreshToken();
        //     //config.headers['authorization'] = "Bearer " + data.accessToken;
        //    // axios.defaults.headers.common['Authorization'] = "Bearer " + data.accessToken;
        //
        // } else {
        //    // axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('accessToken');
        //
        //     /// config.headers['authorization'] = "Bearer " + localStorage.getItem('accessToken');
        // }
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
        console.log(originalConfig)

        if (originalConfig.url !== "/auth/login" && err.response) {
            // Access Token was expired
            if (err.response.status === 401 && !originalConfig._retry) {
                originalConfig._retry = true;

                try {
                    const res = await myAxios.post('/auth/refresh', { token: localStorage.getItem('refreshToken') });

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