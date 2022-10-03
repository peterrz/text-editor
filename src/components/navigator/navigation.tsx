import React from "react";
import { Link, Outlet } from "react-router-dom";
import SwitchToggle from "../SwitchToggle/SwitchToggle";
import { selectTheme, change } from "../../features/theme/themeSlice";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  MainContainer,
  SubContainer,
  TitleContainer,
  NavContainer,
  Footer,
} from "./navigationStyle";
import Layout from "../layout/layout";
function Navigation() {
  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();
  const handleChange = () => {
    console.log("handleChange()");
    dispatch(change());
  };

  return (
    <>
      <MainContainer>
        <SubContainer>
          <TitleContainer>Editor</TitleContainer>
          <NavContainer>
            <Link to="/">My builder</Link>
            <Link to="content">My content</Link>
            <Link to="biography">My Profile</Link>
          </NavContainer>
        </SubContainer>
        <SubContainer>
          <SwitchToggle
            name={theme}
            handleChange={handleChange}
            checked={theme === "light" ? true : false}
          />
        </SubContainer>
      </MainContainer>

      <Layout>
        <Outlet />
      </Layout>
      {/* <Footer>
        {" "}
        <TitleContainer>Develop and design by Pourya Rz</TitleContainer>
      </Footer> */}
    </>
  );
}

export default Navigation;
