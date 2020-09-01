import axios from "axios";

export const api = axios.create({
  baseURL: "https://fs09-itachi-vexereapi.herokuapp.com/api"
});
