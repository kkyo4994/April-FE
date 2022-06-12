import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import View from "../components/View";
import Write from "../components/Write";
import { useOauthGoogle } from "../queries/Login";
import storageKeys from "../utils/axios/StorageKeys";

const LoginContainer: FC = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");
  useOauthGoogle(code);
  const refreshToken = localStorage.getItem(storageKeys.refresh_token);
  const expireAt = localStorage.getItem(storageKeys.expire_at);
  const written = localStorage.getItem(storageKeys.is_letter_written);

  useEffect(() => {
    if (refreshToken && expireAt) {
        if (written === 'true') {
            navigate('/view');
        } else {
            navigate('/write');
        }
    }
    
  }, [navigate, written]);

  return <Loading />
};

export default LoginContainer;
