import styled, { css, keyframes } from "styled-components";

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
  background-image: linear-gradient(
    145deg,
    hsl(188deg 98% 40%) 0%,
    hsl(182deg 53% 53%) 9%,
    hsl(169deg 51% 65%) 18%,
    hsl(149deg 55% 77%) 27%,
    hsl(114deg 58% 84%) 36%,
    hsl(82deg 59% 77%) 45%,
    hsl(58deg 59% 70%) 55%,
    hsl(42deg 89% 70%) 64%,
    hsl(30deg 100% 70%) 73%,
    hsl(11deg 100% 72%) 82%,
    hsl(344deg 100% 71%) 91%,
    hsl(324deg 95% 67%) 100%
  );

  /* dark theme */
  ${(props) =>
    props.theme.id === "dark" &&
    css`
      background-image: linear-gradient(
        145deg,
        hsl(324deg 82% 32%) 0%,
        hsl(312deg 55% 33%) 10%,
        hsl(287deg 41% 35%) 20%,
        hsl(259deg 35% 38%) 30%,
        hsl(230deg 39% 38%) 40%,
        hsl(212deg 61% 31%) 50%,
        hsl(200deg 100% 26%) 60%,
        hsl(194deg 100% 25%) 70%,
        hsl(185deg 100% 23%) 80%,
        hsl(173deg 100% 22%) 90%,
        hsl(154deg 55% 30%) 100%
      );
    `}
`;
