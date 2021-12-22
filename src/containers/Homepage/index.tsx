import React from "react";
import TitleH2 from "components/TitleH2";
import TitleContext from "components/TitleContext";
import styled from "styled-components";
import { Flex } from "uikit";
const HomepageWrap = styled(Flex)`
  flex-direction: column;
  img {
    display: block;
    width: 80%;
    padding-top: 10px;
    padding-left: 10%;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: row;
    img {
      width: 400px;
      padding-top: 0;
      padding-left: 80px;
    }
  }
  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: row;
  }
`;
const Homepage = () => {
  return (
    <HomepageWrap>
      <div>
        <TitleH2>INTRODUCTION</TitleH2>
        <TitleContext>
          CryptoGeek was established in January 2017. The fund size of CryptoGeek Venture exceeds 100 million U.S.
          dollars. Invested in innovative projects in the field of Web3.0 such as Polkadot, Algorand, Compound,
          Filecoin, Cosmos, Mina, and etc.
        </TitleContext>
        <TitleH2>OUR ADVANTAGES</TitleH2>
        <TitleContext>
          We have a cryptocurrency investment community for more than 3 years. The members are experts from the fields
          of finance and IT, and have rich experience in digital currency investment. Among our members, there are 400
          core members whose per capita digital assets are about 1 million U.S. dollars.
        </TitleContext>
        <TitleContext mt="20px">
          We have established long-term and in-depth partnerships with major public chain ecosystems and investment
          institutions around the world.
        </TitleContext>
      </div>
      <img src="/images/page/image_ct1.svg" alt="" />
    </HomepageWrap>
  );
};

export default Homepage;
