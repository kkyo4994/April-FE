import styled from "styled-components";

export const ModalBG = styled.div`  
  width: 100%;
  height: 100%;
  background: rgba(217, 217, 217, 0.5);
  z-index: 10;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const Modal = styled.div`
width: 845px;
height: 460px;
background: #FFFFFF;
border: 1px solid #C7C7C7;
border-radius: 10px;
padding: 26px 28px;
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  z-index: 20;
  left: 50%;
  transform: translate(-50%, -50%);
  
`

export const Content = styled.div`
width: 789px;
height: 408px;
`

export const TopBox = styled.div`
display:flex;
align-items: center;
justify-content: space-between;
margin-bottom: 15px;
`

export const ModifyBtn = styled.div`
width: 97px;
height: 25px;
background: #7F77D9;
border-radius: 35px;
font-size: 12px;
color: #FFFFFF;
padding: 3px 20px;
cursor: pointer;
`

export const Date = styled.div`
font-style: normal;
font-weight: 700;
font-size: 20px;
color: #000000;
`

export const ContentBox = styled.div`
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
height: 130px;
margin-bottom: 40px;
`

export const TextLetterBox = styled(TextBox)`
max-height: 100px;
height: fit-content;
padding-bottom:4px;
overflow: auto;
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