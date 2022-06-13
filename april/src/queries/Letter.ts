import { useMutation } from "react-query";
import {
LetterType,
postWriteLetter,
postModifyLetter
} from "../utils/api/Letter";


export const useWriteLetter = () => 
  useMutation((data: LetterType) => postWriteLetter(data), {});

export const useModifyLetter = () => 
  useMutation((data : LetterType) => postModifyLetter(data), {});