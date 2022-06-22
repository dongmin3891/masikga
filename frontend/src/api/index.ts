import axios from 'axios';

const instance = axios.create({
    baseURL: '',
    timeout: 10000,
    headers: {'Accept': '*/*', 'Content-Type': 'application/json' }
});
instance.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);
instance.interceptors.response.use((response) => {
    if(response.status === 200) {
        return response.data;
    } 
    
    return undefined;
    
})

export default {
    // test api
    getHelloWorld(data = '') {
        return instance({
            url : '/api/hello',
            method : 'get',
            params : data
        })
    },
    getMenuList(data = '') {
        return instance({
            url : '/menuList',
            method : 'post',
            params : data
        })
    }
}


