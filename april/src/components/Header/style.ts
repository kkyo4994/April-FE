import styled from "styled-components";

export const Container = styled.div`  
    height: 70px;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 100;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);    
`

export const Content = styled.div`  
margin: 0 auto;
width: 70%;
margin-top: 10px;
height: 70%;
display: flex;
align-items: center;
justify-content: space-between;
`

export const Name = styled.div`
font-family: 'Roboto';
font-style: normal;
font-size: 20px;
color: #000000;
span{
    font-weight: 700;
    margin-right: 4px;
}`

export const BorderImg = styled.div`
height: 10%;
img{
    width: 100%;
}
`