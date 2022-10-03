import styled from "styled-components";
import { PrimaryBackground, PrimaryTextColor } from "../../Theme";
export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  hight: max-content;
  justify-content: space-between;
  padding: 2rem;
  background-color: ${PrimaryBackground};
  border-bottom: 1px solid #3f4047;
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TitleContainer = styled.div`
  color: ${PrimaryTextColor};
  font-size: 28px;
  font-family: sans-serif;
  margin-inline: 1rem;
`;

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: between;
  gap: 2rem;
  margin-left: 4rem;
`;

export const ChildernContinar = styled.div`
  background-color: ${PrimaryBackground};
  hight: 100hv;
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 2%;
  display: flex;
  flex-direction: row;
  align-items: start;
  hight: max-content;
  justify-content: start;
  padding-top: 1rem;
  width: 100%;
  background-color: ${PrimaryBackground};
  border-top: 1px solid #3f4047;
`;
