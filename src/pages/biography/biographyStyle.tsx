import styled from "styled-components";
import {
  PrimaryBackground,
  PrimaryTextColor,
  SecondaryTextColor,
} from "../../Theme";

export const ModalContainer = styled.div`
  color: ${PrimaryTextColor};
  position: absolute;
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

export const ModalSubTitle = styled.div`
  font-family: sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${SecondaryTextColor};
  text-align: justify;
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
