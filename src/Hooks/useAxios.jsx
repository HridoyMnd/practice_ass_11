import axios from "axios";

const useAxios = axios.create({
    baseURL: "http://localhost:4120",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json"
    }
})
export default useAxios;