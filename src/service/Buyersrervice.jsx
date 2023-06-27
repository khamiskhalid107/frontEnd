import axios from "axios"

 const myapi="Http://localhost:8080/Buyer/allBuyer"

class Buyerservice{
        getBuyer(){
             return axios.get(myapi);
        }
 }
 export default new Buyerservice();