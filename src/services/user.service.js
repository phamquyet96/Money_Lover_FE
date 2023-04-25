import {myAxios} from "../components/config/axios";

class UserService {
    static changePassword(values) {
        return myAxios.post('/auth/change-password', values)
    }

    static verifyEmail(token){
        let param=token.join("/");
        return myAxios.post("/auth/verify",{token:param})
    }

    static getProfile() {
        return myAxios.get('/user/me')
    }
    static deleteAccount() {
        return myAxios.delete('/user/delete')
}}
export default UserService;