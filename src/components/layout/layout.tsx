import React from "react";
import { MainLayout, SubLayout } from "./layoutStyle";

type LayoutProps = {
  children: React.ReactNode;
};
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <MainLayout>
        <SubLayout>{children}</SubLayout>
      </MainLayout>
    </>
  );
}
