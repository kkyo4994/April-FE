import baseURL from "../../utils/axios/BaseUrl"
import * as S from "./styles"

const Main = () => {
    const OauthUrl = `${baseURL}oauth/google`;
    const linkBtnClick = () => {
        window.location.href = OauthUrl;
    }

    return (
        <S.Container>
            <S.Title>한 달 후의 자신에게 편지를 작성해 보세요.</S.Title>
                <S.LinkBtn onClick={linkBtnClick}>
                    <span>작성하러 GO</span>
                </S.LinkBtn>
        </S.Container> 
    )
}

export default Main