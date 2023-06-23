import axios from 'axios';
import { getToken, getTokenType } from '@/utils/auth';
import type { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import errorCode from '@/data/errorCode';
import { Constant } from '@/data/constant';

// 初始化超时时间
const axiosInstance = axios.create({
  // baseURL: 'http://16.162.117.255:3003/', // 注意斜杠结尾
  timeout: 30000
});
// 请求拦截，补充 accessToken
axiosInstance.interceptors.request.use(
  config => {
    const accessToken = getToken();
    // const userId = sessionStorage.getItem(Constant.Uid);
    if (accessToken) {
      Object.assign(config.headers, {
        // token: accessToken ? `${accessToken}` : '',
        // uid: userId ? `${userId}` : '',
        Authorization: `${getTokenType()} ${getToken()}`
      });
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

/**
 * 处理响应的错误信息
 * @param error
 * @returns {Promise<never>}
 */
const handleResponseError = (error: AxiosError) => {
  if (error?.message?.includes?.('timeout')) {
    console.log('TIME OUT');
  } else if (error?.response?.status === 401) {
    // 状态编码为401，无权限，需要重定向到login页面
  } else if (error?.response?.status === 403) {
    // 状态编码为403，无权限，需要提示用户当前操作权限不足
    console.error('权限不足，无法执行此操作。');
  } else {
    console.log(
      errorCode?.[error?.response?.status as keyof typeof errorCode] ?? error.message ?? 'error'
    );
  }
  return Promise.reject(error);
};

/**
 * 处理响应
 * @param response
 * @returns {Promise<never>}
 */
const handleResponseSuccess = (response: any) => {
  // const res = response;
  if (response?.status === 200) {
    return Promise.resolve(response.data);
  } else {
    return Promise.reject(response);
  }
};

// 响应拦截, 处理错误码和跳转拦截
axiosInstance.interceptors.response.use(
  handleResponseSuccess,
  handleResponseError
);

const request = <ResponseType = unknown>(url: string, options?: AxiosRequestConfig<unknown>): Promise<ResponseType> => {
  return new Promise((resolve, reject) => {
    axiosInstance({
      url,
      ...options
    })
      .then((res:any) => {
        resolve(res);
      })
      .catch(err => reject(err));
  });
};

export { axiosInstance, request };