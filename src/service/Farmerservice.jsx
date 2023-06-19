import axios from "axios"

const myapi="Http://localhost:8080/Farmer/allFarmer"

class Farmerservice{
        getFarmer(){
            return axios.get(myapi);
        }
}
export default new Farmerservice();