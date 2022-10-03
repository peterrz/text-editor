import styled from "styled-components";
import { Link } from "react-router-dom";
import { PrimaryBackground, PrimaryTextColor } from "../../Theme";
export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.5rem;
  background-color: ${PrimaryBackground};
  border-bottom: 1px solid #3f4047;
`;

export const MenuIconOpen = styled(Link)`
  display: flex;
  justify-content: start;
  font-size: 1.5rem;
  margin-left: 2rem;
  color: ${PrimaryTextColor};
`;

export const MenuIconClose = styled(Link)`
  display: flex;
  justify-content: end;
  font-size: 1.5rem;
  margin-top: 0.75rem;
  margin-right: 1rem;
  color: ${PrimaryTextColor};
`;

export const SidebarMenu = styled.div<{ close: boolean }>`
  width: 250px;
  height: 100vh;
  background-color: ${PrimaryBackground};
  position: fixed;
  top: 0;
  left: ${({ close }) => (close ? "0" : "-100%")};
  transition: 0.6s;
  border: 1px solid #3f4047;
`;

export const MenuItems = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 90px;
  padding: 1rem 0 1.25rem;
`;

export const MenuItemLinks = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0 2rem;
  font-size: 20px;
  text-decoration: none;
  color: ${PrimaryTextColor};

  &:hover {
    background-color: ${PrimaryTextColor};
    color: ${PrimaryBackground};
    width: 100%;
    height: 45px;
    text-align: center;
    border-radius: 5px;
    margin: 0 2rem;
  }
`;
