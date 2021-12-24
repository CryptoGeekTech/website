import React, { ReactNode } from "react";
import styled from "styled-components";
import { Text } from "uikit";
const TitleWrap = styled(Text)`
  line-height: 22px;
  font-family: "ArialMT";
  font-weight: 400;
  font-size: 14px;
  strong {
    font-weight: bold;
    font-style: oblique;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  ${({ theme }) => theme.mediaQueries.md} {
    line-height: 28px;
  }
`;
const TitleContext = ({ children, mt }: { children: ReactNode | JSX.Element; mt?: string }) => {
  return <TitleWrap mt={mt}>{children}</TitleWrap>;
};
export default TitleContext;
