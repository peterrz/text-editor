import styled from "styled-components";
import { PrimaryBackground, PrimaryTextColor, device } from "../../Theme";

export const MainLayout = styled.div`
  height: 100%;
  min-height: max-content;
  width: 100%;

  display: flex;
  justify-content: center;
  overflow: none;
`;

export const SubLayout = styled.div`
  width: 100%;
  @media ${device.laptop} {
    max-width: 800px;
  }

  @media ${device.desktop} {
    max-width: 1400px;
  }
`;
