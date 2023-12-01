import styled from "styled-components";

const Stack = styled.div<{ gap?: string }>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap ?? "2em"};
`;
export default Stack;
