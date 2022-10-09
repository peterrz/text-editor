import styled from "styled-components";

export const Input = styled.input.attrs((props: { color: string }) => props)`
  font-size: 18px;
  padding: 5px 5px;
  margin-bottom: 10px;
  align-self: center;
  margin-left: 8px;
  background: #fff;
  border: 3px solid ${(props) => props.color};
  border-radius: 3px;
  ::placeholder {
    color: #fefefef;
  }
`;
export const Text = styled.p`
  font-size: 14px;
  margin: 0px 0px 2px 8px;
`;
