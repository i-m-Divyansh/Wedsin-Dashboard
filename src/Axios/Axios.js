import axios from "axios";

// let API = "http://localhost:8081";
let API = "https://wedsin-dev-api.applore.in";

let instance = axios.create({
  baseURL: API,
});

export default instance;
