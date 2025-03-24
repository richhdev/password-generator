import React from "react";
import styled, { css } from "styled-components";
import { TableProps } from "./types";

export const Table = (props: TableProps) => {
  return <TableOuter {...props}>{props.children}</TableOuter>;
};

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Th = styled.th`
  padding: 12px 24px;
  margin: 0;
  text-align: left;

  &:not(last-child) {
    border-bottom: 1px solid
      ${(props) => props.theme.table.borderColor ?? "rgba(0,0,0,0.2)"};
  }
`;

export const Tr = styled.tr`
  &:last-child td {
    border-bottom: none;
  }
`;

export const Td = styled("td")`
  padding: 12px 24px;
  margin: 0;
  &:not(last-child) {
    border-bottom: 1px solid
      ${(props) => props.theme.table.borderColor ?? "rgba(0,0,0,0.2)"};
  }
`;

const TableOuter = styled.table<TableProps>`
  /* border-collapse: collapse; */
  border-spacing: 0;

  width: ${(props) => props.width ?? "100%"};
  height: ${(props) => props.height ?? "auto"};
  max-width: 100%;
  overflow-x: auto;
  border: 1px solid
    ${(props) => props.theme.table.borderColor ?? "rgba(0,0,0,0.2)"};
  border-radius: 10px;

  color: ${(props) => props.theme.color ?? "black"};
  border-spacing: 0;

  ${(props) =>
    props.striped &&
    css`
      ${Tbody} ${Tr}:nth-child(odd) {
        background-color: ${(props) =>
          props.theme.table.stripedBackground ?? "rgba(0,0,0,0.04)"}
    `}
`;
