export const settingUserInfo = (userInfo : object) => {
  if(userInfo){
    window.localStorage.setItem('userInfo', JSON.stringify(userInfo))
  } else {
    window.localStorage.setItem('userInfo', '');
  }
}

export const gettingUserInfo = () => {
  const userInfo = window.localStorage.getItem('userInfo');
  if(userInfo) {
    return JSON.parse(userInfo);
  } else {
    return null;
  }
}

export const settingAuthToken = (token: string) => {
  if(token){
    window.localStorage.setItem('authToken', JSON.stringify(token))
  } else {
    window.localStorage.setItem('authToken', '');
  }
}

export const gettingAuthToken = () => {
  const token = window.localStorage.getItem('authToken');
  if(token){
    return JSON.parse(token);
  }else {
    return null;
  }
}

export const LocalStorageClear = () => {
  window.localStorage.clear();
}