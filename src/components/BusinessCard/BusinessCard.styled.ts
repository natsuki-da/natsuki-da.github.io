import styled from "styled-components";
import { Colors, Fonts } from "../../global/Global.styled";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  width: 20%;
  height: 50%;
  background-color: ${Colors.DOT1};
  display: flex;
  flex-direction: column;
  `;

  export const Card_Top = styled.div`
    display: flex;
    flex: 5;
    background-color: ${Colors.DOT2};
  `;

  export const Card_Bottom = styled.div`
    display: flex;
    flex: 6;
    background-color: ${Colors.DOT3};
  `;

  export const Card_Bottom_Left = styled.div`
  flex: 1;
`;

  export const Card_Bottom_Right = styled.div`
    flex: 1;
    background-color: ${Colors.DOT1};
    display: flex;
    flex-direction: column;
  `;

  export const Name = styled.div`
    font-family: ${Fonts.NOTO_SANS_JP};
    font-size: 1.5rem;
    width: fit-content;
    transform: rotate(90deg);
    background-color: ${Colors.DOT2};
  `;
