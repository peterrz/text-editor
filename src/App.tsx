import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import theme from "styled-theming";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { useAppSelector, useAppDispatch } from "./app/hooks";
import { selectTheme, change } from "./features/theme/themeSlice";
import Navigation from "../src/components/navigator/navigation";
import Builder from "./pages/builder/builder";
import Content from "./pages/content/content";
import Biography from "./pages/biography/biography";
export const backgroundColor = theme("theme", {
  light: "#fff",
  dark: "#2d2d2d",
});

export const textColor = theme("theme", {
  light: "#000",
  dark: "#fff",
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  background-color: ${backgroundColor};
  color: ${textColor};
`;

function App() {
  const Theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();
  return (
    <ThemeProvider theme={{ theme: Theme }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Builder />} />
            <Route path="content" element={<Content />} />
            <Route path="biography" element={<Biography />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
