import React from "react";

const LinkArr = [
  {
    title: "CryptoGeekTech twitter",
    icon: "twitter",
    link: "https://twitter.com/CryptoGeekCG",
    imgTitle: "CryptoGeek",
  },
  {
    title: "CryptoGeekTech telegram",
    icon: "telegram",
    link: "https://t.me/cryptogeekcommunity",
    imgTitle: "CryptoGeek",
  },
];

function ConnectUs() {
  return (
    <>
      {LinkArr.map((v: { title: string; icon: string; link: string }, index: number) => {
        return (
          <a key={index} className="connect_us_link" href={v.link} title={v.title}>
            <img src={`/images/header/img/${v.icon}.svg`} alt={v.title} title="imgTitle" />
          </a>
        );
      })}
    </>
  );
}
export default ConnectUs;
