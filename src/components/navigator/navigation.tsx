import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./navigationStyle";
import Layout from "../layout/layout";
import Sidebar from "../sidebar/sidebar";
function Navigation() {
  return (
    <>
      <Sidebar />

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
