"use client";

import styled, { ThemeProvider, css } from "styled-components";
import { useTheme } from "@/theme";
import { clampDefault, ff, fz, color, size } from "@/theme";
import { clampGen } from "@/utils/clamp-gen";
import PageOuter from "@/components/PageOuter";
import NavBar from "@/components/NavBar";
import Stack from "@/components/Stack";
import Text, { H1, Strong, type TextProps } from "@/components/Text";
import Table, { Tbody, Td, Tr } from "@/components/Table";
import GradientBackground from "@/components/GradientBackground";

export default function ApiDocsPage() {
  const { theme, themeSwitch, setThemeSwitch } = useTheme();
  const endpoint = "https://pass-gen-richh.vercel.app/api";

  return (
    <ThemeProvider theme={theme}>
      <PageOuter>
        <NavBar themeSwitch={themeSwitch} setThemeSwitch={setThemeSwitch} />
        <Main>
          <IntroText>
            <H1>API DOCUMENTATION</H1>
            <Text>
              The password generator is available as an API. <br />
              Simply call the API endpoint to receive a response in JSON format.
            </Text>
          </IntroText>

          <Panel>
            <Stack gap={size.xl3}>
              <Stack gap={size.xs}>
                <Title fz={fz.h4Responsive} fw={600}>
                  Endpoint:
                </Title>
                <CodeBox>{endpoint}</CodeBox>
              </Stack>
              <Stack gap={size.sm}>
                <Title fz={fz.h4Responsive} fw={600}>
                  Response:
                </Title>
                <CodeBox>{`{"password":"nK+)Fe$8lS=/5,T"}`}</CodeBox>
              </Stack>
            </Stack>
          </Panel>

          <Panel>
            <Stack gap={size.xl3}>
              <Stack gap={size.xs}>
                <Title>Options</Title>
                <Text>
                  The same options on the website are available in the API,
                  simply add the options as variables to the querystring.
                </Text>
              </Stack>

              {[
                {
                  id: "length",
                  description: (
                    <>
                      Minimum allowable length is <Code secondary>8</Code>.
                      <br />
                      Maximum allowable length is <Code secondary>99</Code>.
                    </>
                  ),
                  type: "number",
                  default: "15",
                },
                {
                  id: "lowecase",
                  description: (
                    <>
                      Include lowercase letters.
                      <br />
                      <Code secondary>qwertyuiopasdfghjklzxcvbnm</Code>
                    </>
                  ),
                  type: "boolean",
                  default: "true",
                },
                {
                  id: "uppercase",
                  description: (
                    <>
                      Include uppercase letters.
                      <br />
                      <Code secondary>QWERTYUIOPASDFGHJKLZXCVBNM</Code>
                    </>
                  ),
                  type: "boolean",
                  default: "true",
                },
                {
                  id: "numbers",
                  description: (
                    <>
                      Include numbers.
                      <br />
                      <Code secondary>1234567890</Code>
                    </>
                  ),
                  type: "boolean",
                  default: "true",
                },
                {
                  id: "special",
                  description: (
                    <>
                      Include special characters.
                      <br />
                      <Code
                        secondary
                      >{`~\`!@#$%^&*()_-+={[}]|\\:;"'<,>.?/`}</Code>
                    </>
                  ),
                  type: "boolean",
                  default: "true",
                },
              ].map(
                (item: {
                  id: string;
                  description: JSX.Element;
                  type: string;
                  default: string;
                }) => (
                  <TableOuter key={`option-${item.id}`}>
                    <Table style={{ width: "100%", overflowX: "scroll" }}>
                      <Tbody>
                        <TrMobile>
                          <Td colSpan={2}>
                            <Strong fz={fz.h5Responsive}>{item.id}</Strong>
                          </Td>
                        </TrMobile>
                        <TrMobile>
                          <Td colSpan={2}>{item.description}</Td>
                        </TrMobile>
                        <TrDesktop>
                          <Td style={{ width: "25%", verticalAlign: "top" }}>
                            <Strong fz={fz.h5Responsive}>{item.id}</Strong>
                          </Td>
                          <Td>{item.description}</Td>
                        </TrDesktop>
                        <Tr>
                          <Td style={{ width: "25px" }}>type</Td>
                          <Td>
                            <Code>{item.type}</Code>
                          </Td>
                        </Tr>
                        <Tr>
                          <Td>default</Td>
                          <Td>
                            <Code>{item.default}</Code>
                          </Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </TableOuter>
                )
              )}
            </Stack>
          </Panel>

          <Panel>
            <Stack gap={size.xl5}>
              <Stack gap={size.xs}>
                <Title>Usage examples</Title>
                <Text>
                  Calling the endpoint without any variables will generate a
                  password with the default options.
                </Text>
                <CodeBox>{endpoint}</CodeBox>
              </Stack>

              <Stack gap={size.xs}>
                <Text>
                  To change the length of the password, use the{" "}
                  <Code secondary>length</Code> variable.
                </Text>
                <CodeBox>
                  <>
                    {endpoint}
                    <TextBlue>?length=30</TextBlue>
                  </>
                </CodeBox>
              </Stack>

              <Stack gap={size.xs}>
                <Text>
                  If you dont want special characters, set{" "}
                  <Code secondary>special</Code> to false.
                </Text>
                <CodeBox>
                  {endpoint}
                  <TextBlue>?special=false</TextBlue>
                </CodeBox>
              </Stack>

              <Stack gap={size.xs}>
                <Text>You can combine variables in any combination.</Text>
                <CodeBox>
                  {endpoint}
                  <TextBlue>?length=30&special=false&numbers=false</TextBlue>
                </CodeBox>
              </Stack>

              <Stack gap={size.xs}>
                <Text>
                  If all options are set to false, an error response will be
                  returned.
                </Text>
                <CodeBox>
                  {endpoint}
                  <TextBlue>
                    ?lowercase=false&uppercase=false&numbers=false&special=false
                  </TextBlue>
                </CodeBox>
                <Text>Error Response</Text>
                <CodeBox
                  style={{ color: "red" }}
                >{`{"error":"At least one option must be set to true"}`}</CodeBox>
              </Stack>
            </Stack>
          </Panel>
        </Main>
      </PageOuter>
      <GradientBackground />
    </ThemeProvider>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: ${size.xl5};
  padding: 15vh 8px;
  @media (min-width: 992px) {
    padding: 15vh 0;
  }
`;

const IntroText = styled.section`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: ${size.sm};
`;

const CodeBox = styled("div")`
  display: block;
  padding: 16px;
  font-family: ${ff.mono};
  font-size: ${fz.p};
  line-height: 1.2;
  color: #fff;
  background-color: ${(props) =>
    props.theme.id === "dark" ? "rgba(255,255,255,0.1)" : " rgba(0,0,0,0.9)"};
  border-radius: 10px;
  overflow: auto;
  word-wrap: break-word;

  @media (min-width: 992px) {
    padding: 30px;
  }
`;

const Panel = styled.section`
  width: 100%;
  max-width: 992px;
  padding: ${clampGen({
    minFontSize: "24",
    maxFontSize: "42",
    ...clampDefault,
  })};
  margin: 0 auto;
  background-color: ${(props) => props.theme.backgroundColor};
  border-radius: 10px;
`;

const Title = (props: TextProps) => (
  <Text fz={fz.h4Responsive} fw={600} {...props} />
);

const TableOuter = styled("div")`
  width: 100%;
  margin: 0 auto;
  font-family: ${ff.p};
  font-size: ${fz.pResponsive};
`;

const TrMobile = styled(Tr)`
  @media (min-width: 556px) {
    display: none;
  }
`;

const TrDesktop = styled(Tr)`
  @media (max-width: 556px) {
    display: none;
  }
`;

const Code = styled("span")<{
  secondary?: boolean;
}>`
  font-family: ${ff.mono};
  border-radius: 3px;
  padding: 0px 8px 2px;
  background-color: ${(props) =>
    props.theme.id == "dark"
      ? "rgba(100, 170, 238, 0.7)"
      : "rgba(100, 170, 238, 0.3)"};
  ${(props) =>
    props.secondary &&
    css`
      background-color: ${(props) =>
        props.theme.id == "dark" ? "rgba(255,255,255,0.3)" : "rgba(1,1,1,0.1)"};
    `}
`;

const TextBlue = styled.span`
  color: ${color.blue};
`;
