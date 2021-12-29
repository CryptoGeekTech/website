import React from "react";
import TitleH1 from "components/TitleH1";
import TitleH2 from "components/TitleH2";
import TitleContext from "components/TitleContext";
import styled from "styled-components";
import { Flex } from "uikit";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
// eslint-disable-next-line
import "swiper/css/bundle";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const CommunitypageWrap = styled(Flex)`
  flex: 1;
  flex-flow: wrap;
`;

const LiWrap = styled.div`
  padding-top: 20px;
  padding-bottom: 10px;
  width: 49%;
  ${({ theme }) => theme.mediaQueries.md} {
    width: 25%;
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;
const CommunitypageStyled = styled.div`
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  // .swiper-slide img {
  //   display: block;
  //   width: 100%;
  //   object-fit: cover;
  // }

  .swiper {
    width: 100%;
    height: 300px;
    margin: 0 auto;
    ${({ theme }) => theme.mediaQueries.xs} {
      // height: 500px;
    }
    ${({ theme }) => theme.mediaQueries.md} {
      height: 700px;
    }
  }
  .append-buttons {
    text-align: center;
    margin-top: 20px;
  }

  .append-buttons button {
    display: inline-block;
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    padding: 4px 10px;
    border-radius: 4px;
    margin: 0 10px;
    font-size: 13px;
  }
  .swiper-button-next:after,
  .swiper-button-prev:after {
    color: ${({ theme }) => theme.colors.text};
    font-size: 20px;
  }
  .swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
  .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
    background-color: ${({ theme }) => theme.colors.text};
  }
`;
const CommunitypageImgWrap = styled.div`
  img {
    width: 100%;
  }
`;
const SwiperContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  align-items: stretch;
  justify-content: space-between;
  list-style: none;
  img {
    margin-bottom: 20px;
    display: block;
    &:nth-child(1) {
      width: 68%;
    }
    &:nth-child(2) {
      width: 30%;
    }
    &:nth-child(3) {
      width: 30%;
    }
    &:nth-child(4) {
      width: 68%;
    }
  }
`;
const CommunityArr = [
  { number: "150,000+", text: "Community Member" },
  { number: "5000+", text: "Technical Member" },
  { number: "50+", text: "Global Coop Projects" },
  { number: "200+", text: "Community AMA" },
];
const Communitypage = () => {
  return (
    <CommunitypageStyled>
      <TitleH2>COMMUNITY</TitleH2>

      <CommunitypageWrap>
        {CommunityArr.map((v: { number: string; text: string }, index: number) => {
          return (
            <LiWrap key={index}>
              <TitleH1>{v.number}</TitleH1>
              <TitleContext>{v.text}</TitleContext>
            </LiWrap>
          );
        })}
      </CommunitypageWrap>
      <TitleH2>Activities</TitleH2>
      <CommunitypageImgWrap>
        <img src={`/images/community/iamge_ama.webp`} alt="iamge_ama" />
      </CommunitypageImgWrap>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        {[0, 1, 2].map((round) => (
          <SwiperSlide key={round}>
            <RoundCard value={[round * 4 + 1, round * 4 + 2, round * 4 + 3, round * 4 + 4]} />
          </SwiperSlide>
        ))}
      </Swiper>
    </CommunitypageStyled>
  );
};
const RoundCard = ({ value }: { value: number[] }) => {
  return (
    <SwiperContainer>
      {value.map((v) => (
        <img key={v} src={`/images/community/${v}.webp`} alt={`${v}`} />
      ))}
    </SwiperContainer>
  );
};
export default Communitypage;
