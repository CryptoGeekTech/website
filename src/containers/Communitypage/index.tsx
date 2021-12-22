import React from "react";
import TitleH1 from "components/TitleH1";
import TitleH2 from "components/TitleH2";
import TitleContext from "components/TitleContext";
import styled from "styled-components";
import { Flex } from "uikit";
const CommunitypageWrap = styled(Flex)`
  flex: 2;
  img {
    display: block;
    width: 400px;
    padding-left: 80px;
  }
`;

const LiWrap = styled.div`
  padding-top: 40px;
  width: 50%;
  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 60px;
  }
`;
const CommunityArr01 = [
  { number: "150,000+", text: "Community Member" },
  { number: "5000+", text: "Technical Member" },
];
const CommunityArr02 = [
  { number: "50+", text: "Global Coop Projects" },
  { number: "200+", text: "Community AMA" },
];
const Communitypage = () => {
  return (
    <>
      <TitleH2>COMMUNITY</TitleH2>
      <CommunitypageWrap>
        {CommunityArr01.map((v: { number: string; text: string }, index: number) => {
          return (
            <LiWrap key={index}>
              <TitleH1>{v.number}</TitleH1>
              <TitleContext>{v.text}</TitleContext>
            </LiWrap>
          );
        })}
      </CommunitypageWrap>
      <CommunitypageWrap>
        {CommunityArr02.map((v: { number: string; text: string }, index: number) => {
          return (
            <LiWrap key={index}>
              <TitleH1>{v.number}</TitleH1>
              <TitleContext>{v.text}</TitleContext>
            </LiWrap>
          );
        })}
      </CommunitypageWrap>
    </>
  );
};

export default Communitypage;
