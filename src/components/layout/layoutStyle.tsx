import styled from "styled-components";
import { PrimaryBackground, PrimaryTextColor, device } from "../../Theme";

export const MainLayout = styled.div`
  height: 100vh;
  width: 100wh;
  background-color: ${PrimaryBackground};
  display: flex;
  justify-content: center;
`;

export const SubLayout = styled.div`
  @media ${device.laptop} {
    max-width: 800px;
  }

  @media ${device.desktop} {
    max-width: 1400px;
  }
`;
