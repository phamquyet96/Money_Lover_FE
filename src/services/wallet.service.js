import { myAxios } from "../components/config/axios";


class WalletService {
    static async addWallet(data){
        return await myAxios.post('/wallet/create', data);
    }

    static async getDetailWallet(id){
        return await myAxios.get(`/wallet/info/${id}`)
    }

    static async deleteWallet(id){
        return await myAxios.delete(`/wallet/${id}`);
    }

    static async updateWallet(data) {
        return await myAxios.put('/wallet/update', data)
    }

    static async getWalletOfUser(){
        return await myAxios.get(`/wallet`)
    }
}

export default WalletService;