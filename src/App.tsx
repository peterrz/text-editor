import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import theme from "styled-theming";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { useAppSelector, useAppDispatch } from "./app/hooks";
import { selectTheme, change } from "./features/theme/themeSlice";
import Navigation from "./components/navigator/navigation";
import GlobalStyles from "./globals/GlobalStyles";
import Builder from "./pages/builder/builder";
import Content from "./pages/content/content";
import Biography from "./pages/biography/biography";

function App() {
  const Theme = useAppSelector(selectTheme);

  return (
    <ThemeProvider theme={{ theme: Theme }}>
      <GlobalStyles />
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
