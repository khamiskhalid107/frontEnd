import axios from "axios"

 const myapi="Http://localhost:8080/Product/allProduct"

class Productservice{
        getProduct(){
             return axios.get(myapi);
        }
 }
 export default new Productservice();