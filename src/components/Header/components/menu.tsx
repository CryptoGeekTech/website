import React, { useState } from "react";
import { Flex, useMatchBreakpoints } from "uikit";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const MenuLink = [
  {
    link: "/about",
    title: "about",
  },
  {
    link: "/ventures",
    title: "ventures",
  },
  {
    link: "/community",
    title: "community",
  },
  {
    link: "/guest",
    title: "guest",
  },
  {
    link: "/contactUs",
    title: "Contact Us",
  },
];
const MenuWrap = styled(Flex)`
  padding: 20px 0 4px;
  flex-direction: column;
  text-align: center;
  a {
    margin-right: 0;
    line-height: 40px;
    font-size: 14px;
    font-weight: bolder;
    color: ${({ theme }) => theme.colors.textDisabled};
    text-transform: uppercase;
    &.on,
    &:hover {
      color: ${({ theme }) => theme.colors.text};
    }
  }
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 100px 0 16px;
    flex-direction: row;
    text-align: left;
    a {
      margin-right: 84px;
      line-height: 18px;
    }
  }
`;
const TitleH2 = styled.h2`
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  font-family: "Arial-BoldMT";
  color: ${({ theme }) => theme.colors.text};
  cursor: point;
  line-height: 40px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.textDisabled};
`;
export default function Menu() {
  const { pathname } = useLocation();
  const { isMd, isXs, isSm } = useMatchBreakpoints();
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      {isMd || isXs || isSm ? (
        <TitleH2
          className="_h2"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          MENU
        </TitleH2>
      ) : null}
      {showMenu || !(isMd || isXs || isSm) ? (
        <MenuWrap>
          {MenuLink.map((v: { link: string; title: string }, index: number) => {
            return (
              <Link
                key={index}
                className={pathname.startsWith(v.link) ? "on" : ""}
                to={v.link}
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                {v.title}
              </Link>
            );
          })}
        </MenuWrap>
      ) : null}
    </>
  );
}
