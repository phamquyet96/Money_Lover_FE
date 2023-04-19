import {axiosJWT} from "../components/config/axios";
import {myAxios} from "../components/config/axios";
import axios from "axios";

class UserService {
    static changePassword(values) {
        return axios.post('http://localhost:8000/api/auth/change-password', values, {
            headers: {
                authorization: localStorage.getItem('accessToken')
            }
        });
    }

    static verifyEmail(token){
        let param=token.join("/");
        return myAxios.post("/auth/verify",{token:param})
    }
}
export default UserService;