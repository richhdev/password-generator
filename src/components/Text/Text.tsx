import styled from "styled-components";
import { ff, fz, lh } from "../../theme/text";
import { TextProps } from "./types";

const Text = styled.p<TextProps>`
  margin: 0;
  padding: 0;
  font-family: ${(props) => props.ff ?? props.theme.text.p.ff ?? ff.p};
  font-size: ${(props) => props.fz ?? props.theme.text.p.fz ?? fz.pResponsive};
  line-height: ${(props) => props.lh ?? props.theme.text.p.lh ?? lh.p};
  font-weight: ${(props) => props.fw ?? props.theme.text.p.fw ?? 400};
  color: ${(props) => props.color ?? props.theme.color ?? "black"};
`;

export default Text;

export const StyledH1 = styled(Text)`
  font-family: ${(props) => props.ff ?? props.theme.text.h1.ff ?? ff.h1};
  font-size: ${(props) =>
    props.fz ?? props.theme.text.h1.fz ?? fz.h1Responsive};
  line-height: ${(props) => props.lh ?? props.theme.text.h1.lh ?? lh.h1};
  font-weight: ${(props) => props.fw ?? props.theme.text.h1.fw ?? 700};
  text-transform: uppercase;
`;

export const H1 = (props: TextProps) => (
  <StyledH1 forwardedAs="h1" {...props} />
);

export const H1Old = (props: TextProps) => (
  <Text
    as="h1"
    ff={ff.h1}
    fz={fz.h1Responsive}
    lh={lh.h1}
    fw={500}
    css={"text-transform:uppercase"}
    {...props}
  />
);

export const H2 = (props: TextProps) => (
  <Text
    as="h2"
    ff={ff.h2}
    fz={fz.h2Responsive}
    lh={lh.h2}
    fw={700}
    {...props}
  />
);

export const H3 = (props: TextProps) => (
  <Text
    as="h3"
    ff={ff.h3}
    fz={fz.h3Responsive}
    lh={lh.h3}
    fw={700}
    {...props}
  />
);

export const H4 = (props: TextProps) => (
  <Text
    as="h4"
    ff={ff.h4}
    fz={fz.h4Responsive}
    lh={lh.h4}
    fw={700}
    {...props}
  />
);

export const H5 = (props: TextProps) => (
  <Text
    as="h5"
    ff={ff.h5}
    fz={fz.h5Responsive}
    lh={lh.h5}
    fw={700}
    {...props}
  />
);

export const H6 = (props: TextProps) => (
  <Text
    as="h6"
    ff={ff.h6}
    fz={fz.h6Responsive}
    lh={lh.h6}
    fw={700}
    {...props}
  />
);

export const P = (props: TextProps) => <Text as="p" {...props} />;

export const Strong = (props: TextProps) => (
  <Text as="strong" fw="bold" {...props} />
);

export const Small = (props: TextProps) => (
  <Text as="small" fz={fz.smallResponsive} lh={lh.small} {...props} />
);

export const I = (props: TextProps) => (
  <Text as="i" css={"font-style: italic"} {...props} />
);

export const U = (props: TextProps) => (
  <Text as="u" css={"text-decoration: underline"} {...props} />
);
