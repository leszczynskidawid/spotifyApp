import Logo from "../atoms/NavigationAtoms/Logo";
import TextLogo from "../atoms/NavigationAtoms/TextLogo";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LogoBrandNav = styled.div`
  font-size: 30px;
  cursor: pointer;
`;
function LogoBrand() {
  return (
    <Link to="/">
      <LogoBrandNav>
        <Logo />
        <TextLogo />
      </LogoBrandNav>
    </Link>
  );
}

export default LogoBrand;
