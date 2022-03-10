import styled from "styled-components";
import ListMenuItems from "../molecules/ListMenuItems";
import LogoBrand from "./LogoBrand";

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: auto;
  height: 100%;
`;
function Nav() {
  return (
    <NavContainer>
      <LogoBrand />
      <ListMenuItems />
    </NavContainer>
  );
}

export default Nav;
