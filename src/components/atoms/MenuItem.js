import React from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";
function MenuItem() {
  const MenuItem = styled.a`
    list-style: none;
    font-size: 16px;
    width: 140px;
    letter-spacing: 0;
    box-sizing: border-box;
    color: #fff;
    display: block;
    text-decoration: none;
    font-weight: 700;
    cursor: pointer;
    &:nth-child(4) {
      border-left: 2px solid #fff;
    }
    &:hover {
      color: #1ed760;
    }
  `;

  return (
    <>
      <Link to="premium">
        <MenuItem>Premium</MenuItem>
      </Link>
      <Link to="premium">
        <MenuItem>Pomoc</MenuItem>
      </Link>
      <Link to="premium">
        <MenuItem>Pobierz</MenuItem>
      </Link>
      <Link to="premium">
        <MenuItem>Zarejsetruj się</MenuItem>
      </Link>
      <Link to="premium">
        <MenuItem>Zaloguj się</MenuItem>
      </Link>
    </>
  );
}

export default MenuItem;
