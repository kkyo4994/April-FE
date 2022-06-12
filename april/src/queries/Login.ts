import axios, { AxiosResponse } from "axios";
import { useCallback } from "react";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import queryKeys from "./QueryKeys";
import storageKeys from "../utils/axios/StorageKeys";
import { getOauthGoogle, TokenType } from "../utils/api/Login";
import toast from "react-hot-toast";

const getDateWithAddHour = (hour: number) => {
  const date = new Date();
  date.setHours(date.getHours() + hour);
  return date;
};

export const useOauthGoogle = (code: string | null) => {
  const navigate = useNavigate();

  const onSuccess = useCallback((data: AxiosResponse<TokenType, unknown>) => {
    console.log(data?.data)
    const { access_token, refresh_token, is_letter_written } = data.data;
    localStorage.setItem(storageKeys.access_token, access_token);
    localStorage.setItem(storageKeys.refresh_token, refresh_token);
    localStorage.setItem(
      storageKeys.expire_at,
      getDateWithAddHour(24).toString()
    );
    localStorage.setItem(storageKeys.is_letter_written, String(is_letter_written));
    toast.success("로그인이 성공했습니다! ㅇㅖ~");
  
  }, []);

  const onError = useCallback(
    (err: unknown) => {
      if (!axios.isAxiosError(err)) {
        toast.error("로그인 인증 오류. 다시 시도해주세요.");
      
        return;
      }

      if (err.response?.status !== 200) {
        toast.error("다시 시도해 주세요.");
      }
    },
    [navigate]
  );

  return useQuery([queryKeys.googleOauth, code], () => getOauthGoogle(code), {
    onSuccess,
    onError,
    retry: false,
  });
};
