import React from "react";
import TitleH2 from "components/TitleH2";
import styled from "styled-components";
import TitleContext from "components/TitleContext";
import { Flex } from "uikit";
const ContactUspageWrap = styled(Flex)`
  flex: 1;
`;
const ContactUspage = (): JSX.Element => {
  return (
    <ContactUspageWrap flexDirection="column">
      <TitleH2>GUEST</TitleH2>
      <TitleContext>
        If you'd like to get in touch, feel free to drop us a message at <strong>ventures@cryptogeek.cn</strong>
      </TitleContext>
      <TitleContext mt="30px">
        TG Address：<strong>@AliCryptoGeek</strong>
      </TitleContext>
    </ContactUspageWrap>
  );
};

export default ContactUspage;
