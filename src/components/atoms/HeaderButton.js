import React from "react";
import styled from "styled-components";

function HeaderButton(props) {
  const Button = styled.button`
    background-color: #1ed760;
    color: rgb(41, 65, 171);
    text-transform: uppercase;
    border-radius: 2rem;
    border: none;
    padding: 1rem 3rem;
    font-weight: 700;
    margin-top: 2em;
    cursor: pointer;
  `;
  return <Button>{props.text}</Button>;
}

export default HeaderButton;
