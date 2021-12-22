import React, { ReactNode } from "react";
import styled from "styled-components";
import { Heading } from "uikit";
const TitleH1Wrap = styled(Heading)`
  font-family: "Arial-BoldMT";
  line-height: 28px;
  font-size: 20px;
  ${({ theme }) => theme.mediaQueries.md} {
    line-height: 44px;
    font-size: 40px;
  }
`;
const TitleH1 = ({ children }: { children: ReactNode | JSX.Element }) => {
  return <TitleH1Wrap>{children}</TitleH1Wrap>;
};
export default TitleH1;
