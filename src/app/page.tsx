"use client";

import styled, { ThemeProvider } from "styled-components";
import { useTheme } from "@/theme";
import PageOuter from "@/components/PageOuter";
import NavBar from "@/components//NavBar";
import PasswordGenerator from "@/components/PasswordGenerator";
import GradientBackground from "@/components/GradientBackground";

export default function HomePage() {
  const { theme, themeSwitch, setThemeSwitch } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <PageOuter>
        <NavBar themeSwitch={themeSwitch} setThemeSwitch={setThemeSwitch} />
        <Main>
          <PasswordGenerator />
        </Main>
      </PageOuter>
      <GradientBackground />
    </ThemeProvider>
  );
}

const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
`;
