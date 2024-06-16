import styled from "styled-components"
import { Colors, Fonts } from "../../global/Global.Styles";

export const Container = styled.div`
  display: flex;
`;

export const Left = styled.div`
  flex: 1;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;  
`;

export const Image = styled.img`
  position: absolute;
  right: 5%;
  left: 5%;
  width: 90%;
`;

export const Right = styled.div`
  flex: 1;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;  
`;

export const Description = styled.div`
  position: absolute;
  right: 5%;
  left: 5%;
  width: 90%;
  height: 85%;
// background-color: ${Colors.Primary};
  div {
    font-size: 2.5rem;
    font-family: ${Fonts.CAVEAT};
    margin: 2rem 0;
  }
  span{
    font-size: 1rem;
    font-family: ${Fonts.NOTO_SANS_JP}; 
  }
`;