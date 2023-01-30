import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import Head from "next/head";
import GlobalMeta from "@/components/GlobalMeta";
import { themeDark, themeLight } from "@/theme";
import ThemeSwitch from "@/components/ThemeSwitch";
import GradientBackground from "@/components/GradientBackground";
import PasswordGenerator from "@/components/PasswordGenerator";
import { Footer, Header, IconLink, Main, Outer } from "./_components";
import GithubSvg from "@/images/github-icon.svg";

export default function Home() {
  const [theme, setTheme] = useState(themeLight);
  const [themeSwitch, setThemeSwitch] = useState<"auto" | "light" | "dark">(
    "auto"
  );

  useEffect(() => {
    const themeMap = {
      auto: window.matchMedia("(prefers-color-scheme: dark)").matches
        ? themeDark
        : themeLight,
      light: themeLight,
      dark: themeDark,
    };
    setTheme(themeMap[themeSwitch]);
  }, [themeSwitch]);

  return (
    <>
      <Head>
        <title>Password Generator - Richh</title>
        <GlobalMeta />
        <meta name="description" content="Strong password generator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <Outer>
          <Header>
            <ThemeSwitch callback={setThemeSwitch} />
          </Header>
          <Main>
            <PasswordGenerator />
          </Main>
          <Footer>
            <IconLink
              href="https://github.com/richhdev/password-generator"
              target="_blank"
              rel="noreferrer"
              aria-label="github"
            >
              <GithubSvg role="img" alt="github" />
            </IconLink>
            {/* <div>information</div> */}
          </Footer>
        </Outer>
        <GradientBackground />
      </ThemeProvider>
    </>
  );
}
