import { instance } from "../axios";
import baseURL from "../axios/BaseUrl";

export interface LetterType {
    title : string;
    content : string;
    feeling : string;
    song : string;
}

export const postWriteLetter = async (data : LetterType) => {
    const uri = `${baseURL}letter` 
    const response = await instance.post(uri, data);
  return response;
};
