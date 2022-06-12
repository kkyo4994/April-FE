import React, { useState, useEffect } from "react";
import * as S from "./style"

const Calendar = () => {
  const monList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [month, changeMonth] = useState();
  const [year, changeYear] = useState();

  let calendarDays = [];
  let new_month: JSX.Element[] = [];

  return (
    <>
    <S.Container>
      <S.Header>
        <button>◀</button>
        <span>
          {year}
        </span>
        <button>▶</button>
      </S.Header>
      <S.Days>
        <S.Day>
          <div>일</div>
          <div>월</div>
          <div>화</div>
          <div>수</div>
          <div>목</div>
          <div>금</div>
          <div>토</div>
        </S.Day>
    
      </S.Days>
    </S.Container>
    </>
  );
};


export default Calendar;
