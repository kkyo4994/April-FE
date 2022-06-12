import { instance } from "../axios";
import baseURL from "../axios/BaseUrl";

export interface TokenType {
  access_token: string;
  refresh_token: string;
  is_letter_written :boolean;
}

export const getOauthGoogle = async (code: string | null) => {
    const uri = `${baseURL}oauth/google?code=${code}` 
    const response = await instance.post<TokenType>(uri
    );
  return response;
};
