import axios from "axios";
let resourcesMainServer =axios.create({
    baseURL:"http://localhost:3001",
    timeout:4000
})
