import React from "react";
import TitleH2 from "components/TitleH2";
import TitleContext from "components/TitleContext";
import styled from "styled-components";
import { Button, Flex } from "uikit";
const HomepageWrap = styled(Flex)`
  flex: 1;
  flex-direction: column;
  align-items: start;
  img {
    display: block;
    width: 80%;
    margin-top: 140px;
    padding-left: 10%;
    display: none;
    ${({ theme }) => theme.mediaQueries.md} {
      display: block;
    }
  }
  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: row;
    img {
      width: 400px;
      padding-top: 0;
      padding-left: 80px;
    }
  }
`;
const LinkWrap = styled.div`
  clear: both;
  overflow: hidden;
`;
const Link = styled.a`
  display: block;
  float: left;
  font-family: ArialMT;
  font-size: 12px;
  line-height: 24px;
  padding: 0 12px;
  margin-right: 12px;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.text};
  &:hover {
    color: ${({ theme }) => theme.colors.background};
    background-color: ${({ theme }) => theme.colors.text};
  }
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 0 20px;
    font-size: 14px;
    line-height: 28px;
  }
`;
const ButtonStyle = styled(Button)`
  font-family: Arial-BoldMT;
  font-weight: bold;
  text-transform: uppercase;
  padding: 0 46px;
  height: 40px;
  line-height: 40px;
  margin-top: 40px;
  margin-bottom: 60px;
  display: block;
  width: 100%;
  ${({ theme }) => theme.mediaQueries.md} {
    margin-top: 60px;
    margin-bottom: 20px;
    width: 300px;
  }
`;
const profolioArr = [
  { title: "Polkadot", link: "https://polkadot.network/" },
  { title: "Algorand", link: "https://www.algorand.com/" },
  { title: "Cosmos", link: "https://cosmos.network/" },
  { title: "Dfinity", link: "https://dfinity.org/" },
  { title: "Nervos", link: "https://www.nervos.org/" },
  { title: "Tezos", link: "https://tezos.com/" },
  { title: "Filecoin", link: "https://filecoin.io/" },
  { title: "Near", link: "https://near.org/" },
  { title: "Kava", link: "https://www.kava.io/" },
  { title: "Compound", link: "https://compound.finance/" },
  { title: "Mina", link: "https://minaprotocol.com/" },
  { title: "Flow", link: "https://www.onflow.org/" },
  { title: "Kusama", link: "https://kusama.network/" },
];
const Venturespage = (): JSX.Element => {
  return (
    <HomepageWrap>
      <div>
        <TitleH2>VENTURES</TitleH2>
        <TitleContext>
          Cryptogeek Ventures (CV) is a multi-stage encryption and technology investment company. Its mission is to
          create a more predictable future for human beings by supporting and incubating encryption and cutting-edge
          technology projects.
        </TitleContext>
        <TitleContext mt="20px">
          Our team has a wide range of backgrounds, including traditional finance, decentralized finance, software and
          hardware development, product operation, media management and delivery, etc.
        </TitleContext>
        <TitleContext mt="20px">
          Our deep crypto expertise enables us to assist projects ranging from 0 to 1 with comprehensive solutions
          ranging from product model, operation strategy, community governance to market launch and audit.
        </TitleContext>
        <TitleH2>PROFOLIO</TitleH2>
        <LinkWrap>
          {profolioArr.map((v: { title: string; link: string }, index: number) => {
            return (
              <Link key={index} href={v.link} title={v.title} target="_blank" rel="noopener noreferrer">
                {v.title}
              </Link>
            );
          })}
        </LinkWrap>
        {/* mailto:ventures@cryptogeek.cn?subject=ARV%20Investment%20Opportunity&amp;&amp;bcc=brian.lee%40alameda-research.com  */}
        <ButtonStyle
          onClick={() => {
            window.open("mailto:ventures@cryptogeek.cn?subject=Investment%20application&amp;&amp;");
          }}
        >
          Apply for investment
        </ButtonStyle>
      </div>
      <img src="/images/page/image_ct2.svg" alt="" />
    </HomepageWrap>
  );
};

export default Venturespage;
