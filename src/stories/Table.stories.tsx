import type { Meta } from "@storybook/react";
import Table, { Tbody, Td, Tr } from "@/components/Table";
import Text, { Strong } from "@/components/Text";
import { fz } from "@/theme";
import styled from "styled-components";
import { Code } from "@/components/Text/Text";

const meta = {
  title: "Example/Table",
  component: Table,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof Table>;

export default meta;

export const Default = () => {
  return (
    <Outer>
      <Table style={{ width: "100%", overflowX: "scroll" }}>
        <Tbody>
          <TrMobile>
            <Td colSpan={2}>
              <Strong fz={fz.h5Responsive}>special</Strong>
            </Td>
          </TrMobile>
          <TrMobile>
            <Td colSpan={2}>
              <Text>Include special characters.</Text>
              <br />
              <Code secondary>{`~\`!@#$%^&*()_-+={[}]|\\:;"'<,>.?/`}</Code>
            </Td>
          </TrMobile>
          <TrDesktop>
            <Td style={{ width: "25%", verticalAlign: "top" }}>
              <Strong fz={fz.h5Responsive}>Special</Strong>
            </Td>
            <Td>
              <Text>Include special characters.</Text>
              <br />
              <Code secondary>{`~\`!@#$%^&*()_-+={[}]|\\:;"'<,>.?/`}</Code>
            </Td>
          </TrDesktop>
          <Tr>
            <Td>
              <Text>type</Text>
            </Td>
            <Td>
              <Code>boolean</Code>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Text>default</Text>
            </Td>
            <Td>
              <Code>true</Code>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Outer>
  );
};

const Outer = styled("div")`
  width: 100%;
  max-width: 600px;
  padding: 30px;
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
