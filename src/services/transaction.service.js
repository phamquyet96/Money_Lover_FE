import {myAxios} from "../components/config/axios";

class TransactionService{
     static addTransaction(data) {
        return myAxios.post('/transaction',data)
    }
}
export default TransactionService;