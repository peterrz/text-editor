import styled from "styled-components";
import {
  PrimaryBackground,
  PrimaryTextColor,
  SecondaryTextColor,
} from "../../Theme";

export const MainContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

export const ModalContainer = styled.div`
  position: fixed;
  background: white;
  width: 80%;
  height: max-content;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 40rem;
  display: flex;
  justify-content: start;
  flex-direction: column;
  background-color: ${PrimaryBackground};
  padding: 1rem 1.5rem;
  border: 1px solid #3f4047;
  border-radius: 12px;
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
  gap: 1.5rem;
  margin-top: 0.5rem;
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
  margin-top: 0.5rem;
  gap: 0.5rem;
  margin-left: 0.2rem;
  color: ${PrimaryTextColor};
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
  gap: 1.5rem;
  margin-top: 2rem;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;

  gap: 0.5rem;
`;

export const ModalTitle = styled.div`
  font-family: sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  margin-top: 0.6em;
  color: ${PrimaryTextColor};
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
display: inline-block;
font-size: 16px;
margin-top: 1rem;
border-radius: 8px;
`;

export const ContentLink = styled.a`
  font-family: sans-serif;
  text-decoration: none;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: ${PrimaryTextColor};
`;
