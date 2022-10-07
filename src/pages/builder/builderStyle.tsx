import styled from "styled-components";
import {
  PrimaryBackground,
  PrimaryTextColor,
  SecondaryTextColor,
} from "../../Theme";

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 5;
`;
export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: center;
  height: 60%;
  background-color: #fff;
  margin-left: 1rem;
  margin-top: 1rem;
  border: 1px dashed #aaa;
  padding: 5px 0px;
  gap: 0.5rem;
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
  justify-content: end;
`;

export const Button = styled.button`
color: ${PrimaryTextColor},
background: #0169CD;
width: max-content;
padding: 0.5rem;
background-color: #0169CD; 
color: white;
border: none;
padding: 10px 24px;
text-align: center;
text-decoration: none;
display: flex;
self-align: center;
font-size: 16px;
border-radius: 8px;
margin-top: -8px;
`;
