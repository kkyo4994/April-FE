import * as S from "./style"
import Calendar  from "./Calendar"
import React, { useState } from 'react';
import TodayLetterModal from "../Modal";

const View = () => {
    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(true);
    }

    return (
        <>
        <S.Container>
            <S.CalendarContainer>
                <Calendar />
            </S.CalendarContainer>  
            <S.LetterConainer>
                <S.LetterBoxContainer>
                <S.DateBox>
                <S.Date>2022-06-12</S.Date>
                <S.SmailDate>2022-05-12에 온 편지입니다.</S.SmailDate>
            </S.DateBox>
            <S.Content>
                <S.Text>제목</S.Text>
                <S.TextBox>프실 언제 끝나</S.TextBox>
            </S.Content>
            <S.Content>
                <S.Text>기분</S.Text>
                <S.TextBox>힘들어...</S.TextBox>
            </S.Content>
            <S.Content>
                <S.Text>노래</S.Text>
                <S.TextBox>https://www.youtube.com/watch?v=d8d0DBoT0As</S.TextBox>
            </S.Content>
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
            <S.TodayBtn onClick={openModal}>오늘 편지 보러 가기</S.TodayBtn>
                </ S.LetterBoxContainer>
            </S.LetterConainer>
        </S.Container>
         <TodayLetterModal modal={showModal} showModal={setShowModal}/>
       </>
    )
}

export default View;