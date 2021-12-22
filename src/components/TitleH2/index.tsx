import React, { ReactNode } from "react";
import styled from "styled-components";
import { Heading } from "uikit";
const TitleH2Wrap = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  position: relative;
  h2 {
    font-family: "Arial-BoldMT";
    display: inline-block;
    line-height: 24px;
    padding-bottom: 8px;
    padding-right: 200px;
    font-size: 16px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
    ${({ theme }) => theme.mediaQueries.md} {
      font-size: 20px;
      padding-bottom: 16px;
    }
  }
  &:after {
    content: "";
    position: absolute;
    width: 60px;
    height: 3px;
    bottom: -1px;
    left: 0;
    background-color: ${({ theme }) => theme.colors.text};
  }
  ${({ theme }) => theme.mediaQueries.md} {
    margin-top: 80px;
    margin-bottom: 40px;
    h2 {
      padding-right: 14px;
    }
  }
`;
const TitleH2 = ({ children }: { children: ReactNode | JSX.Element }) => {
  return (
    <TitleH2Wrap>
      <Heading>{children}</Heading>
    </TitleH2Wrap>
  );
};
export default TitleH2;
