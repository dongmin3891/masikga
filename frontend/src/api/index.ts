import axios, { AxiosResponse } from 'axios';
import CategoryList from '../interfaces/CategoryList';
import MenuListType from '../interfaces/menuList';

export const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_SERVER,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json', 
      'Accept': '*/*',
    }
});
apiClient.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        console.log("error");
        return Promise.reject(error);
    }
);
apiClient.interceptors.response.use((response: AxiosResponse) => {
    console.log("response", response);
    if(response.data.retCode === "0000") {
        const res = response.data
        return res;
    } 
    return response.data;
})

export const getHelloWorld = async() => {
  const response = await apiClient.get<any>('/api/hello');
  return response;
}

export const getCategoryList = async() => {
  const response = await apiClient.get<CategoryList[]>('/category');
  return response;
}

export const getMenuList = async(kind = 'A') => {
  const params = {
    kind : kind
  }
  const response = await apiClient.post<MenuListType[]>('/menuList', params);
  return response;
}

export const getSignUp = async(data) => {
  const response = await apiClient.post<any>('/member/signup', data);
  return response;
}

export const getLogin = async(data) => {
  const response = await apiClient.post<any>('/member/login', data);
  return response;
}

// export default {
//     // test api
//     getHelloWorld(data = '') {
//         return apiClient({
//             url : '/api/hello',
//             method : 'get',
//             params : data
//         })
//     },
//     getMenuList(data = 'A') {
//         return apiClient({
//             url : '/menuList',
//             method : 'post',
//             data : {kind: data}
//         })
//     },
//     getCategoryList(data = '') {
//         return apiClient({
//             url : '/category',
//             method : 'get',
//             params : data
//         })
//     },
//     getSignUp(data:object) {
//       return apiClient({
//         url: '/member/signup',
//         method:'post',
//         data: data
//       })
//     }
// }


