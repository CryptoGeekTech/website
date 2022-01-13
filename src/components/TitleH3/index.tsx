import React, { ReactNode } from "react";
import styled from "styled-components";
import { Heading } from "uikit";
const TitleH3Wrap = styled(Heading)`
  font-family: "Arial-BoldMT";
  line-height: 20px;
  font-size: 12px;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 16px;
  }
`;
const TitleH3 = ({ children }: { children: ReactNode | JSX.Element }) => {
  return <TitleH3Wrap>{children}</TitleH3Wrap>;
};
export default TitleH3;
