import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import {
LetterType,
postWriteLetter
} from "../utils/api/Letter";

const navigate = useNavigate();

const onSuccess = () => {
    alert("편지 작성이 완료되었습니다!");
    navigate("/view");
}

const onError = () => {
    alert("편지 작성이 실패했습니다. 다시 시도해 주세요");
    window.location.replace("/");
}

export const useWriteLetter = () => 
  useMutation((data: LetterType) => postWriteLetter(data), {
    onSuccess,
    onError,
  });
