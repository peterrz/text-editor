import styled from "styled-components";
import { PrimaryTextColor, device } from "../../Theme";

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5;
  @media ${device.laptop} {
    flex-direction: row;
  }
`;
export const ColumnContainer = styled.div`
  display: none;
  @media ${device.laptop} {
    margin-left: 1rem;
    justify-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    height: 60%;
    background-color: #fff;
    width: max-content;
    margin-top: 1rem;
    border: 1px dashed #aaa;
    padding: 5px 0px;
    gap: 0.5rem;
  }
`;

export const Title = styled.div`
  font-family: sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: ${PrimaryTextColor};
  text-align: justify;
  margin-top: 2.5rem;
`;

export const ModalContainer = styled.div`
  color: ${PrimaryTextColor};
  position: relative;
  height: max-content;
  width: max-content;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 40rem;
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 1.5rem;
  z-index: 0;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
`;

export const Button = styled.button`
  width: max-content;
  padding: 0.5rem;
  background-color: #0169cd;
  color: white;
  border: none;
  padding: 10px 32px;
  text-align: center;
  text-decoration: none;
  display: flex;
  self-align: center;
  font-size: 16px;
  border-radius: 8px;
  margin-top: -8px;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-inline: 0.5rem;
  hight: max-content;
  justify-content: space-between;
`;

export const Tools = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.5rem;
  @media ${device.laptop} {
    display: none;
  }
`;
