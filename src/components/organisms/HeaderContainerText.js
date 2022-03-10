import React from "react";
import styled from "styled-components";
import HeaderTitleText from "../atoms/HeaderTitleText";
import HeaderButton from "../atoms/HeaderButton";
import HeaderInfo from "../atoms/HeaderInfo";

const HeaderContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #1ed760;
  font-family: spotify-circular, Helvetica, Arial, sans-serif;
  text-align: center;
  width: 1024px;
`;
function HeaderContainerText() {
  return (
    <HeaderContainer>
      <HeaderTitleText text="Listening is" />
      <HeaderTitleText primary text="Everything" />

      <HeaderInfo text="Miliony utworów i podcastów. Bez podawania karty kredytowej"></HeaderInfo>
      <HeaderButton text="załóż konto"></HeaderButton>
    </HeaderContainer>
  );
}

export default HeaderContainerText;
