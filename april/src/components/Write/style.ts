import styled from "styled-components";
import { MainBackground }from "../../assets/icons"

export const Container = styled.div` 
width: 75%;
min-height: 720px;
margin: 0 auto;
margin-top: 70px;
border:1px solid red;
`

export const Input = styled.input`
width: 100%;
height: 60px;
background: rgba(251, 251, 251, 0.5);
border: 1px solid #E0E7EC;
border-radius: 10px;
padding-left: 10px;
outline: none;
margin-bottom: 30px;
`
export const TextareaBox = styled.textarea`
width:100%;
height: 358px;
background: rgba(251, 251, 251, 0.5);
border: 1px solid #E0E7EC;
border-radius: 10px;
padding: 10px;
outline: none;
resize: none;
margin: 10px 0px 30px;
`

export const WriteBtn = styled.div<{disabled : boolean}>`
margin: 0 auto;
width: 196.42px;
height: 50px;
text-align: center;
padding-top: 15px;
color: #7F77D9;
background: rgba(127, 119, 217, 0.1);
border-radius: 50px;
font-size: 15px;
&:disabled{
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
`