import * as S from "./style"
import { HeaderLogo } from "../../assets/logo";
import { HeaderBottom } from "../../assets/icons";

const Header = () => {
    return (
        <S.Container>
            <S.Content>
                <img src={HeaderLogo} />
                <S.Name><span>김해교</span>님</S.Name>
            </S.Content>
            <S.BorderImg>
            <img src={HeaderBottom} />
            </S.BorderImg>
        </S.Container>
    )
}

export default Header;