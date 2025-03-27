import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { themeLight } from "../theme/"; // Adjust the path
import "./styles.css";
export const withThemeProvider = (Story, context) => {
  return (
    <Outer>
      <ThemeProvider theme={themeLight}>
        <Story {...context} />
      </ThemeProvider>
    </Outer>
  );
};

const Outer = styled("div")`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
