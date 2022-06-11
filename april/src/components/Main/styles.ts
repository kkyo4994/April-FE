import styled from "styled-components";
import { MainBackground }from "../../assets/icons"

export const Container = styled.div`
width:100%;
background-image: url(${MainBackground});
    position: absolute;
    top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
`

export const Title = styled.p`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Noto Sans';
    
font-weight: 700;
font-size: 40px;
text-align: center;

color: #000000; 
`

export const LinkBtn = styled.div`
width: 280px;
height: 55px;
margin: 0 auto;
margin-top: 600px;
background: #7F77D9;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 50px;
text-align: center;
padding-top:12px;
cursor: pointer;
span {
    color: #ffffff;
    font-size: 20px;
}
`

