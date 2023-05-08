import {myAxios} from "../components/config/axios";

class CategoryService {
    static getAllCategory() {
        return myAxios.get('/transaction-category')
    }
    static addSubCategory(values){
        console.log(values,1)
        return myAxios.post('/transaction-subcategory', values)
    }
}

export default CategoryService;