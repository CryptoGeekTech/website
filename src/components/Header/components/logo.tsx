import React from "react";
import styled from "styled-components";
import { preLink } from "config/index";
const LogoWrap = styled.a`
  width: 26%;
  ${({ theme }) => theme.mediaQueries.md} {
    img {
      width: 280px;
    }
  }
`;
function Logo() {
  return (
    <LogoWrap href={preLink + "/"} title="CryptoGeekTech">
      <img src={"/images/header/img/logo.svg"} alt="Crypto Geek" title="Crypto Geek" />
    </LogoWrap>
  );
}
export default Logo;
