import axios, { AxiosRequestConfig } from "axios";
import baseURL from "./BaseUrl";
import storageKey from "./StorageKeys";

interface TokenType {
  access_token: string;
  refresh_token: string;
}

export const request = axios.create({
  baseURL,
  timeout: 100000,
});

const getDateWithAddHour = (hour: number) => {
  const date = new Date();
  date.setHours(date.getHours() + hour);
  return date;
};

export const refresh = async (
  config: AxiosRequestConfig
): Promise<AxiosRequestConfig> => {
  const expire_at = localStorage.getItem(storageKey.expire_at);
  let access_token = localStorage.getItem(storageKey.access_token);
  const refresh_token = localStorage.getItem(storageKey.refresh_token);

  console.log(access_token);
  // if (!refreshToken || !expireAt) {
  //   window.location.href = "/";
  //   localStorage.removeItem("expireAt");
  //   localStorage.removeItem("access_token");
  //   localStorage.removeItem("refresh_token");
  // }

  {
    /*if(new Date() >= new Date(expireAt)) {
      try{
          const {} = (await request.post<TokenType>())
      }
  } */
  }
  config.headers!["Authorization"] = `${access_token}`;

  return config;
};
