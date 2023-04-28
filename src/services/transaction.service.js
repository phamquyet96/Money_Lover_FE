import {myAxios} from "../components/config/axios";

class TransactionService{
    static addTransaction(data) {
        return myAxios.post('/transaction',data)
    }

    static getTransaction(walletId, startDate, endDate) {
        return myAxios.get('/transaction', {
            params: {
                walletId:walletId,
                startDate:startDate,
                endDate: endDate}
        })
    }
}
export default TransactionService;