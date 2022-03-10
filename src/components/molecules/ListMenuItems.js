import React from "react";
import styled from "styled-components";
import MenuItem from "../atoms/MenuItem";

const MenuItems = styled.li`
  color: #1ed760;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 60px;
  max-width: 1170px;
`;

function ListMenuItems() {
  return (
    <ul>
      <MenuItems>
        <MenuItem />
      </MenuItems>
    </ul>
  );
}

export default ListMenuItems;
