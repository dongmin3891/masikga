import { useState } from 'react'
import { useQuery } from 'react-query'
import { getNewAccessToken } from '../../api';
import { settingAuthToken } from '../../store/LocalStore';

// refresh hooks
const UseSlientRefresh = () => {

  const [refreshStop, setRefreshStop] = useState(false);
  useQuery('refresh', getNewAccessToken, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    retry: 2,
    refetchInterval: refreshStop ? false : 60 * 55 * 1000, // 만료시간 설정
    refetchIntervalInBackground: true,
    onError: () => {
      setRefreshStop(true);
      // token값 비우기
      settingAuthToken('');
    },
    onSuccess: (data:any) => {
      const token = data?.accessToken;
      if(token) settingAuthToken(token);
    }
  })
  return null;
}

export default UseSlientRefresh;