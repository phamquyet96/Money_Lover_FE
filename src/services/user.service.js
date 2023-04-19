import {myAxios} from "../components/config/axios";

class UserService {
    static changePassword(values) {
        return myAxios.post('/auth/change-password', values, {
            headers: {
                authorization: "Bearer "+ localStorage.getItem('accessToken')
            }
        });
    }

    static verifyEmail(token){
        let param=token.join("/");
        return myAxios.post("/auth/verify",{token:param})
    }
}
export default UserService;