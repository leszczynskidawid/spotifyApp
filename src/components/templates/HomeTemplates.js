import React from "react";
import styled from "styled-components";
import HeaderContainerText from "../organisms/HeaderContainerText";
function HomeTemplates() {
  const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
    background-color: rgb(41, 65, 171);
    position: relative;
    overflow: hidden;
  `;
  const Circle = styled.div`
    background-color: #1ed760;
    position: absolute;
    border-radius: 50%;
    background-color: #1ed760;
    position: absolute;
    border-radius: 50%;
  `;
  const Top = styled(Circle)`
    width: 650px;
    height: 650px;
    top: 0%;
    right: -36%;
  `;
  const Left = styled(Circle)`
    width: 650px;
    height: 650px;
    bottom: -40%;
    left: -20%;
    z-index: 5;
  `;
  const Bottom = styled(Circle)`
    width: 25%;
    height: 25%;
    background-color: rgb(41, 65, 171);
    top: 40%;
    left: -8%;
    border: 2px solid black;
    overflow: hidden;
  `;

  return (
    <Wrapper>
      <Circle />
      <Top />
      <Left />
      <Bottom />
      <HeaderContainerText />
    </Wrapper>
  );
}

export default HomeTemplates;
