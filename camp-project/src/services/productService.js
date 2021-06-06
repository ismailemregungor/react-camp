import axios from "axios"

export default class ProductService {

    getProducts(){
        //backend api'a request atma
        return axios.get("http://localhost:8080/api/products/getall")
    }

}