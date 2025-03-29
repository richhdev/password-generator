import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { themeLight } from "../src/theme";
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
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
