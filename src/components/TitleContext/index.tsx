import React, { ReactNode } from "react";
import styled from "styled-components";
import { Text } from "uikit";
const TitleWrap = styled(Text)`
  line-height: 26px;
  font-family: "ArialMT";
  font-weight: 400;
  // font-weight: bold;
  font-size: 12px;
  strong {
    font-weight: bold;
    font-style: oblique;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 14px;
    font-weight: normal;
    line-height: 24px;
  }
`;
const TitleContext = ({ children, mt }: { children: ReactNode | JSX.Element; mt?: string }) => {
  return <TitleWrap mt={mt}>{children}</TitleWrap>;
};
export default TitleContext;
