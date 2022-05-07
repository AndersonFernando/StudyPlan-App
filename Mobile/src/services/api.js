import axios from "axios";

const hostAPICarnaiba = 'http://10.0.0.195:3000'
const hostAPISerraTalhada = 'http://192.168.1.4:3000'

const api = axios.create({
  baseURL: hostAPICarnaiba,

});

export default api;