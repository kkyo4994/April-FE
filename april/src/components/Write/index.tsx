import { useState } from "react";
import { useWriteLetter } from "../../queries/Letter";
import * as S from "./style"

const Write = () => {
  const writeMutation = useWriteLetter();
  const [letterTitle, setLetterTitle] = useState("");
  const [letterFeeling, setLetterFeeling] = useState("");
  const [letterContent, setLetterContent] = useState("");
  const [letterSong, setLetterSong] = useState("");

  const onClickWriteBtn = () => {
    writeMutation.mutate(
      {
        title:letterTitle,
        feeling: letterFeeling,
        song: letterSong,
        content: letterContent,
      }
    )
  }

    return (
      <S.Container>
          <S.Input type="text" placeholder="제목을 작성해 주세요."  onChange={e => setLetterTitle(e.target.value)}/>
          <S.Input type="text" placeholder="오늘의 기분을 작성해 주세요." onChange={e => setLetterFeeling(e.target.value)}/>
          <S.Input type="text" placeholder="오늘의 노래를 작성해 주세요." onChange={e => setLetterSong(e.target.value)} />
         <S.TextareaBox placeholder="오늘 있었던 일과 한 달 후의 자신에게 보낼 말을 작성해 주세요." onChange={e => setLetterContent(e.target.value)} />
        <S.WriteBtn onClick={onClickWriteBtn} disabled={letterContent=== "" || letterFeeling === "" || letterSong === "" || letterTitle === ""}>작성하러 가기</S.WriteBtn>
      </S.Container>
    )   
}

export default Write;