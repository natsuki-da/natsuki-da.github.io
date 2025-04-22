import * as S from "./BusinessCard.styled"

const BusinessCard = () => {
    return (
        <S.Container>
            <S.Card>
                <S.Card_Top></S.Card_Top>
                <S.Card_Bottom>
                    <S.Card_Bottom_Left>L</S.Card_Bottom_Left>
                    <S.Card_Bottom_Right>
                        <S.Name>飯田夏季</S.Name>
                    </S.Card_Bottom_Right>
                </S.Card_Bottom>
            </S.Card>
        </S.Container>
    )
};

export default BusinessCard;