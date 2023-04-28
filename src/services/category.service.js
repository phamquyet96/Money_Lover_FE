import {myAxios} from "../components/config/axios";

class CategoryService {
    static getAllCategory() {
        return myAxios.get('/transaction-category')
    }
}

export default CategoryService;