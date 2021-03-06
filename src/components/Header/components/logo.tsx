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
      <img style={{ display: "none" }} src={"/images/header/img/logo.png"} alt="CryptoGeek" title="CryptoGeek" />
      <img src={"/images/header/img/header_logo.svg"} alt="CryptoGeek" title="CryptoGeek" />
    </LogoWrap>
  );
}
export default Logo;
