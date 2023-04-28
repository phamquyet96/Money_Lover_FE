import {myAxios} from "../components/config/axios";

class TransactionService{
     static addTransaction(data) {
        return myAxios.post('/transaction',data)
    }
    static getTransaction(){
        
    }
}
export default TransactionService;