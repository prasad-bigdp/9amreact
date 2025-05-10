import axios from "axios";
import { BasrUrl } from "./Constant/contant";
const instance = axios.create({
    baseURL: BasrUrl,
});

 export default instance

