import {myAxios} from "../components/config/axios";


class WalletService {
    static async addWallet(data){
        return myAxios.post('/wallet/create', data, {
            headers: {
                authorization: "Bearer " + localStorage.getItem('accessToken')
            }
        });
    }
}

export default WalletService;