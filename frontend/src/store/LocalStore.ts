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