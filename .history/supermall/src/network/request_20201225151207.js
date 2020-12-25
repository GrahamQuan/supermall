import axios from "axios";

export function request(config) {
  // 1.创建instance实例
  const instance = axios.create({
    baseURL: "http://152.136.185.210:7878/api/m5",
    timeout: 5 * 1000
  });

  // 2.请求和响应拦截器
  instance.interceptors.request.use(
    config => {
      console.log(config);
      // 必须返回出去
      return config;
    },
    err => {
      console.log(err);
    }
  );
  instance.interceptors.response.use(
    result => {
      console.log(result);
      // 必须返回出去
      return result.dat;
    },
    err => {
      console.log(err);
    }
  );

  // 3.发送网络请求
  return instance(config);
}
