import React from "react";
import styled from "styled-components";
function TextLogo() {
  const LogoTxt = styled.span`
    color: white;
    font-weight: 700;
    font-size: 0.8em;
    margin-left: 0.3em;
  `;
  return <LogoTxt>Spotify</LogoTxt>;
}

export default TextLogo;
