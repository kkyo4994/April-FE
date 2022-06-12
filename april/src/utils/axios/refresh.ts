import axios, { AxiosRequestConfig } from "axios";
import toast from "react-hot-toast";
import { instance } from ".";
import baseURL from "./BaseUrl";
import storageKeys from "./StorageKeys";

export const request = axios.create({
  baseURL,
  timeout: 100000,
});

const getDateWithAddHour = (hour: number) => {
  const date = new Date();
  date.setHours(date.getHours() + hour);
  return date;
};

interface Token {
  accessToken: string;
  refreshToken: string;
}

export const refresh = async (
  config: AxiosRequestConfig
): Promise<AxiosRequestConfig> => {
  const expireAt = localStorage.getItem(storageKeys.expireAt);
  let accessToken = localStorage.getItem(storageKeys.accessToken);
  const refreshToken = localStorage.getItem(storageKeys.refreshToken);

  if (!refreshToken || !expireAt) {
    throw toast.error("로그인이 필요합니다.");
  }

  if (new Date() >= new Date(expireAt)) {
    try {
      const { accessToken: newAccessToken, refreshToken: newRefreshToken } = (
        await instance.put<Token>(baseURL + `Refresh-Token`, { refreshToken })
      ).data;

      localStorage.setItem(storageKeys.accessToken, newAccessToken);
      localStorage.setItem(storageKeys.refreshToken, newRefreshToken);
      localStorage.setItem(
        storageKeys.expireAt,
        getDateWithAddHour(24).toString()
      );

      accessToken = newAccessToken;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response && error.response?.status === 401) {
          throw toast.error("로그인이 만료되었습니다. 다시 로그인 해주세요.");
        }
      }
      throw toast.error("연결 실패했습니다. 다시 로그인 해주세요.");
    }
  }

  config.headers!["Authorization"] = `Bearer ${accessToken}`;

  return config;
};
