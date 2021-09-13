import axios from "axios";

//默认超时时间
axios.defaults.timeout = 1000;
//返回其他状态码
axios.defaults.validateStatus = function(status){
    return status >= 200 && status <=500;
}
//跨域请求，运行保存cookie
axios.defaults.withCredentials = true;

//http request拦截
axios.interceptors.request.use(config =>{
    return config
},error => {
    return Promise.reject(error)
})
export default axios;