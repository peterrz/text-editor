import React from "react";
import { Outlet } from "react-router-dom";
import Layout from "../layout/layout";
import Sidebar from "../sidebar/sidebar";
function Navigation() {
  return (
    <>
      <Sidebar />
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
}

export default Navigation;
