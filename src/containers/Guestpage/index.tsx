import React from "react";
import TitleH2 from "components/TitleH2";
import TitleH3 from "components/TitleH3";
import TitleContext from "components/TitleContext";
import styled from "styled-components";
import { Flex } from "uikit";
const GustpageWrap = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;

const TitleContextWrap = styled.div`
  width: 100%;
  padding-bottom: 20px;
  ${({ theme }) => theme.mediaQueries.md} {
    width: 588px;
    padding-bottom: 40px;
  }
`;
const GustPageUl = styled.ul`
  display: flex;
  flex-flow: wrap;
  align-items: stretch;
  justify-content: space-between;
  list-style: none;
`;
const GustPageLi = styled.li`
  float: left;
  width: 100%;
  margin-right: 0;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  ${({ theme }) => theme.mediaQueries.md} {
    text-align: left;
    margin-right: 20px;
    margin-top: 0;
    margin-bottom: 66px;
    width: 30%;
    img {
      margin-bottom: 20px;
    }
  }
  img {
    margin-bottom: 20px;
    width: 100%;
    // border: 1px dashed ${({ theme }) => theme.colors.cardBorder};
  }
`;
const gusetArr = [
  {
    img: "/images/guest/iamge_rw_1.webp",
    title: "Polkadot",
    context: "Founding Member of Polkadot",
  },
  {
    img: "/images/guest/iamge_rw_2.webp",
    title: "Arthur Falls",
    context: "Dfinity Director of Communications",
  },
  {
    img: "/images/guest/iamge_rw_3.webp",
    title: "Chen Jing",
    context: "Chief Scientist of Algorand",
  },
  {
    img: "/images/guest/iamge_rw_4.webp",
    title: "Medha Parlikar",
    context: "CTO of CasperLabs",
  },
  {
    img: "/images/guest/iamge_rw_5.webp",
    title: "Arthur Breltman",
    context: "Founder of Tezos",
  },
  {
    img: "/images/guest/iamge_rw_6.webp",
    title: "Ryan",
    context: "Polkadot Head of Financing",
  },
];
const Gustpage = (): JSX.Element => {
  return (
    <GustpageWrap flexDirection="column">
      <TitleH2>GUEST</TitleH2>
      <TitleContextWrap>
        <TitleContext>
          The excellent public chain projects such as Algorand, Near, Mina, Cosmos, etc. were also familiar to the
          majority of Chinese users through Cryptogeek in the early days.
        </TitleContext>
      </TitleContextWrap>
      <GustPageUl>
        {gusetArr.map((v: { img: string; title: string; context: string }, index: number) => {
          return (
            <GustPageLi key={index}>
              <img src={v.img} alt="" />
              <TitleH3>{v.title}</TitleH3>
              <TitleContext>{v.context}</TitleContext>
            </GustPageLi>
          );
        })}
      </GustPageUl>
    </GustpageWrap>
  );
};

export default Gustpage;
