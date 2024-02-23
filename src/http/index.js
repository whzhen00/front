import axios from "axios";

//创建axios实例
const service = axios.create({
  baseURL: "http://192.168.192.129:5001/",
  timeout: 6000, //超时
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});
//请求拦截器
service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
//响应拦截器
service.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
