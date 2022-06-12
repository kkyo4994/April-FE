import styled from "styled-components";

export const Container = styled.div`  
   width: 75%;
min-height: 720px;
margin: 0 auto;
margin-top: 70px;
display: flex;
`

export const CalendarContainer = styled.div`
width: 35%;
height: 626px;
border:1px solid blue;
margin-right: 20px;
`
export const LetterConainer = styled.div`
width: 70%;
height: 100%;
`

export const LetterBoxContainer = styled.div`  
   width: 75%;
border:1px solid red;
width: 100%;
height: 742px;
border: 1px solid #C7C7C7;
border-radius: 10px;
padding:19px 28px;
`

export const DateBox = styled.div`
display: flex;
width: 377px;
height: 28px;
margin-bottom: 15px;
`

export const Date = styled.span`
font-family: 'Noto Sans';
font-weight: 700;
font-size: 20px;
color: #000000;
`

export const SmailDate = styled.span`
font-family: 'Noto Sans';
font-weight: 700;
font-size: 12px;
color: rgba(0, 0, 0, 0.5);
margin-top: 7px;
margin-left: 10px;
`

export const Content = styled.div`
margin-bottom: 19px;
`

export const Text = styled.div`
font-family: 'Noto Sans KR';
font-size: 12px;
font-weight: 700;
color: #717A81;
`

export const TextBox = styled.div`
margin-top: 9px;
height: 30px;
border-bottom: 1px solid #E0E7EC;
font-weight: 400;
font-size: 16px;
`

export const LetterContent = styled.div`
height: 334px;
margin-bottom: 40px;
`

export const TextLetterBox = styled(TextBox)`
max-height: 414px;
height: fit-content;
padding-bottom:4px;
`

export const TodayBtn = styled.div`
width: 100%;
height: 30px;
padding-top: 4px;
background: #7F77D9;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 35px;
color: #ffffff;
font-weight: 400;
font-size: 16px;
text-align: center;
cursor: pointer;
`