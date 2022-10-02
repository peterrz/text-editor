import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";

import theme from "styled-theming";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { useAppSelector, useAppDispatch } from "./app/hooks";
import { selectTheme, change } from "./features/theme/themeSlice";

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
  const count = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();
  return (
    <ThemeProvider theme={{ theme: count }}>
      <Container>
        <button aria-label="Decrement value" onClick={() => dispatch(change())}>
          change the theme
        </button>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Counter />

            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <span>
              <span>Learn </span>
              <a
                className="App-link"
                href="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                React
              </a>
              <span>, </span>
              <a
                className="App-link"
                href="https://redux.js.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Redux
              </a>
              <span>, </span>
              <a
                className="App-link"
                href="https://redux-toolkit.js.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Redux Toolkit
              </a>
              ,<span> and </span>
              <a
                className="App-link"
                href="https://react-redux.js.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                React Redux
              </a>
            </span>
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
