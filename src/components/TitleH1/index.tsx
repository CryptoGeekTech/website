import React, { ReactNode } from "react";
import styled from "styled-components";
import { Heading } from "uikit";
const TitleH1Wrap = styled(Heading)`
  font-family: "Arial-BoldMT";
  line-height: 28px;
  font-size: 30px;
  ${({ theme }) => theme.mediaQueries.md} {
    line-height: 50px;
    font-size: 36px;
  }
`;
const TitleH1 = ({ children }: { children: ReactNode | JSX.Element }) => {
  return <TitleH1Wrap>{children}</TitleH1Wrap>;
};
export default TitleH1;
