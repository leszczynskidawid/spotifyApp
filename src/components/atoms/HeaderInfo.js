import React from "react";
import styled from "styled-components";

const H3 = styled.h3``;
function HeaderInfo(props) {
  return <H3>{props.text}</H3>;
}

export default HeaderInfo;
