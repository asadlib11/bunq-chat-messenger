import axios from "axios";
import { API_URL } from "./constants";

const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 20000
});

export default apiClient;