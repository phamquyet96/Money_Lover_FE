import {myAxios} from "../components/config/axios";

class UserService {
    static changePassword(values) {
        return myAxios.post('/auth/change-password', values, {
            headers: {
                authorization: "Bearer "+ localStorage.getItem('accessToken')
            }
        });
    }
}
export default UserService;