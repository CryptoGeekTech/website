import React from "react";
import Header from "components/Header";
import styled from "styled-components";
const MainWrap = styled.div`
  padding-bottom: 40px;
  ${({ theme }) => theme.mediaQueries.md} {
    padding-bottom: 190px;
  }
`;
const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    <MainWrap>{children}</MainWrap>
  </>
);

export default Layout;
