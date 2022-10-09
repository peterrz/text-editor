import styled from "styled-components";
import { PrimaryTextColor } from "../../Theme";

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
  justify-content: start;
  min-height: 50vh;
  background-color: #fff;
  margin-top: 1rem;
  border: 1px dashed #aaa;
  padding: 0.5rem;
  overflow-y: scroll;
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
  margin-top: 1.5rem;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  margin-top: 2rem;
`;

export const Button = styled.button.attrs(
  (props: { disableStyle: boolean }) => props
)`
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
  cursor: ${(props) => (props.disableStyle ? "not-allowed" : "")};
`;
