import { Dispatch, FC, SetStateAction } from "react";
import * as S from "./style"

interface Props {
    modal : boolean;
    showModal : Dispatch<SetStateAction<boolean>>;
}

const TodayLetterModal : FC<Props> = props => {
    return (
        <>
        {props.modal ?
        <>
        <S.ModalBG onClick={() => props.showModal(false)}/>
        <S.Modal>
            <S.Content>
                <S.TopBox>
                <S.Date>2022-06-12</S.Date>
                <S.ModifyBtn>수정하기</S.ModifyBtn>
                </S.TopBox>
            <S.ContentBox>
                <S.Text>제목</S.Text>
                <S.TextBox>봄이다</S.TextBox>
            </S.ContentBox>
            <S.ContentBox>
                <S.Text>기분</S.Text>
                <S.TextBox>기분이 좋아여~</S.TextBox>
            </S.ContentBox>
            <S.ContentBox>
                <S.Text>노래</S.Text>
                <S.TextBox>https://www.youtube.com/watch?v=yw4N_GoIA-k</S.TextBox>
            </S.ContentBox>
            <S.LetterContent>
                <S.Text>편지</S.Text>
                <S.TextLetterBox>프실이 언제 끝날지 참... 한 달 뒤에 0612 너는 다 했겠지
                    빨리 하길 바랄게
                    지금 디자인부터 어떻게 해야할지 막막한디
                    하 진짜 잘 모르겠다 홀로로롤롤
                    와하잇 
                    프실이 언제 끝날지 참... 한 달 뒤에 0612 너는 다 했겠지
                    빨리 하길 바랄게
                    지금 디자인부터 어떻게 해야할지 막막한디
                    하 진짜 잘 모르겠다 홀로로롤롤
                    와하잇 
                    프실이 언제 끝날지 참... 한 달 뒤에 0612 너는 다 했겠지
                    빨리 하길 바랄게
                    지금 디자인부터 어떻게 해야할지 막막한디
                    하 진짜 잘 모르겠다 홀로로롤롤
                    와하잇 
                    프실이 언제 끝날지 참... 한 달 뒤에 0612 너는 다 했겠지
                    빨리 하길 바랄게
                    지금 디자인부터 어떻게 해야할지 막막한디
                    </S.TextLetterBox>
            </S.LetterContent>
            </S.Content>
        </S.Modal>
        </> 
        : null}
        </>
    )
}

export default TodayLetterModal;