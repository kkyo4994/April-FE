import * as S from "./style"

const Write = () => {
    return (
      <S.Container>
          <S.Input type="text" placeholder="제목을 작성해 주세요." />
          <S.Input type="text" placeholder="오늘의 기분을 작성해 주세요." />
          <S.Input type="text" placeholder="오늘의 노래를 작성해 주세요." />
         <S.TextareaBox placeholder="오늘 있었던 일과 한 달 후의 자신에게 보낼 말을 작성해 주세요." />
        <S.WriteBtn disabled={false}>작성하러 가기</S.WriteBtn>
      </S.Container>
    )   
}

export default Write;