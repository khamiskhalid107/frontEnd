import axios from "axios"

const myapi="Http://localhost:8080/Farmer/allFarmer"

class Farmerservice{
        getFarmer(){
            return axios.get(myapi);
        }
        deleteFarmer(id) {
            return axios.delete(`http://localhost:8080/Farmer/deleteFarmer/${id}`);
          }
          
}
export default new Farmerservice();