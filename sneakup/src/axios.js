import axios from "axios";
const instance = axios.create({
    baseURL:'http://localhost:5001/sneakup-28d6e/us-central1/api'

});
export default instance;