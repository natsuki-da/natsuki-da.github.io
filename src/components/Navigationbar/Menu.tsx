import * as S from "./Menu.styles"
import { Glossary, Nav, Paths } from "../../types/enums";
import { Link } from "react-router-dom";

interface ClickedMenuState {
    isClickedMenu: boolean;
    setClickedMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu = (props: ClickedMenuState) => {

    props.isClickedMenu;
    const clickedMenu = () => {
        props.setClickedMenu((prevstate) => !prevstate)
    }

    return (
        <S.MenuContainer>
            <S.Menu>
                <S.Menu_Top>
                    <S.Button onClick={clickedMenu}>
                        <S.Image src="../../icons/cross.png" />
                    </S.Button>
                </S.Menu_Top>
                <S.Menu_Middle>
                    <S.MenuLinks>
                        <S.MenuLink as={Link} to={Paths.HOME}>{Nav.HOME}</S.MenuLink>
                        <S.MenuLink as={Link} to={Paths.ABOUT_ATELIER}>{Nav.ABOUT_ATELIER}</S.MenuLink>
                        <S.MenuLink as={Link} to={Paths.Lessons}>{Nav.LESSONS}</S.MenuLink>
                    </S.MenuLinks>
                </S.Menu_Middle>
                <S.Menu_Bottom>
                    <S.Title>{Glossary.Title}</S.Title>
                    <S.Footer><a href=""><img src="../../icons/instagram.png" alt="instaram icon" /></a></S.Footer>
                </S.Menu_Bottom>
            </S.Menu>
        </S.MenuContainer>
    )
}

export default Menu;
