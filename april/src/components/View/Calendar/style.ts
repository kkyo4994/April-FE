import styled, { keyframes, css } from "styled-components";

/*export const Container = styled.div`  
   width: 75%;
min-height: 720px;
margin: 0 auto;
margin-top: 70px;
border:1px solid red;
`*/
export const Container = styled.div`
  align-items: center;
  /* justify-content:center; */
  flex-direction: column;
  display: flex;
  font-size: 20px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  box-sizing: border-box;
  width: 100%;
  height: 14%;
  font-size: 1em;
  & button {
    margin: 0 25px;
    cursor: pointer;
    outline: none;
    display: inline-flex;
    background: transparent;
    border: none;
    color: #444078;
    font-size: 1.2em;
    padding: 4px;
    &:hover {
      color: #fff;
    }
    &:active {
    }
  }
`;

export const Days = styled.div`
  background-color: #fff;
  width: 93%;
  height: 81%;
  padding: 8px 10px;
  box-sizing: border-box;
  color: #787c9c;
  margin: 0;
  border-radius: 5px;
  font-size: 0.8em;
`;

export const Day = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  & div {
    min-width: 13%;
    max-height: 5%;
    text-align: center;
    font-weight: 600;
    box-sizing: border-box;
  }
`;

export const Row = styled.div`
  width: 100%;
  height: 16%;
  display: flex;
  justify-content: space-between;
  & div {
    width: 13%;
    height: 100%;
    font-weight: 600;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }
  & span {
    margin: 3px 0 0 3px;
    font-size: 0.8em;
  }
`;

export const FloatBtn1 = styled.button`
  box-shadow: 0 1px 2px 0 #777;
  position: fixed;
  z-index: 999;
  right: 6%;
  bottom: 18%;
  width: 18%;
  min-width: 80px;
  max-width: 130px;
  height: 30px;
  margin: auto 0px;
  background-color: #fff;
  border: none;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.7em;
  color: #4d4887;
  cursor: pointer;
  outline: none;
`;

export const FloatBtn2 = styled.button`
  box-shadow: 0 1px 2px 0 #777;
  position: fixed;
  z-index: 999;
  right: 6%;
  bottom: 10%;
  width: 18%;
  min-width: 80px;
  max-width: 130px;
  height: 30px;
  margin: auto 0px;
  background-color: #fff;
  border: none;
  border-radius: 20px;
  font-weight: 600;
  color: #4d4887;
  font-size: 0.7em;
  cursor: pointer;
  outline: none;
  & img {
    margin-top: 2px;
    max-height: 70%;
    width: auto;
    color: #bebddb;
  }
`;

export const scheduleStyle = styled.div`
height: 20%;
width: 100%;
min-height: 11px;
background-color: #112667;
overFlow: hidden;
color: #fff;
padding: 1px;
margin: 0;
font-size: 0.5em;
cursor: pointer;
`
