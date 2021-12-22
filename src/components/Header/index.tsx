import React from "react";
import styled from "styled-components";
import { Flex } from "uikit";
import Logo from "./components/logo";
import ConnectUs from "./components/connectUs";
import Menu from "./components/menu";

const AppHeaderContainer = styled(Flex)`
  // align-items: center;
  // justify-content: space-between;
  flex-direction: column;
  width: 100%;
  padding-top: 40px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.background};
  a {
    display: inline-block;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 80px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
  }
`;
const FrDiv = styled.div`
  .connect_us_link {
    margin-left: 16px;
    img {
      display: block;
      width: 30px;
    }
  }
`;
const HeaderComponent = () => {
  return (
    <AppHeaderContainer>
      <Flex alignItems="center" justifyContent="space-between">
        <Logo />
        <FrDiv>
          <ConnectUs />
        </FrDiv>
      </Flex>
      <Menu />
    </AppHeaderContainer>
  );
};
export default HeaderComponent;
