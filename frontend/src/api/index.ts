import axios, { AxiosResponse } from 'axios';
import CategoryList from '../interfaces/CategoryList';
import MenuListType from '../interfaces/menuList';
import { gettingAuthToken, settingAuthToken } from '../store/LocalStore';
import { getRefreshTokenToCookie } from '../utils/auth';

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
      setAuthToken(gettingAuthToken());
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);
apiClient.interceptors.response.use((response: AxiosResponse) => {
    
    if(response.data.retCode === "0000") {
        const res = response.data
        return res;
    } 
    return response.data;

},  async (error) => {
      // const {config, response: { status }} = error;
      // if(status === 401){
      //   const prevRequest = config

      //   getNewAccessToken().then((result:any) => {
      //     const newAccessToken = result.accessToken;
      //     settingAuthToken(newAccessToken);
      //     setAuthToken(newAccessToken);
      //     config.headers['x-auth-token'] = newAccessToken; //참고
      //     axios.request(config);
      //   }).catch((e) => {
      //     console.log(e);
      //   })
      // }
      // return;
    }
)

export const setAuthToken = (token) => {
  apiClient.defaults.headers.common['x-auth-token'] = token;
}
export const setRefreshToken = (token) => {
  apiClient.defaults.headers.common['refresh-token'] = token;
}


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

export const getNewAccessToken = async() => {
  // cookie
  const refreshToken = getRefreshTokenToCookie();
  const headers = {
    'x-auth-token': gettingAuthToken(),
    'refresh-token': refreshToken
  }
  ;
  const response = await apiClient.get<any>('/member/refresh', {headers});
  return response;
}
