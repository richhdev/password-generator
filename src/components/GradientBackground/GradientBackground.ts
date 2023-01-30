import styled, { css, keyframes } from "styled-components";
import settings from "../../settings";

const gradientBg = keyframes`
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
`;

export default styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100vw;
  height: 100vh;
  box-shadow: inset 0 0 20vw rgb(0 0 0 / 5%);
  background-size: 400% 400%;
  animation: ${gradientBg} 30s linear infinite;

  /* light theme */
  background-image: ${`linear-gradient(145deg, ${settings.light.green}, ${settings.light.blue},${settings.light.pink}, ${settings.light.orange})`};

  /* dark theme */
  ${(props) =>
    props.theme.isDark &&
    css`
      background-size: 300% 300%;
      background-image: ${`linear-gradient(145deg, ${settings.dark.pink}, ${settings.dark.blue},${settings.dark.green})`};
    `}
`;
