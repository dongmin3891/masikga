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
    if(response.data.retCode === "0000") {
        const res = response.data
        return res;
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
    },
    getCategoryList(data = '') {
        return instance({
            url : '/category',
            method : 'post',
            params : data
        })
    }
}


