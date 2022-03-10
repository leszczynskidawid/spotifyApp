import styled from "styled-components";
import { device } from "../../assent/device/device";

function HeaderTitleText(props) {
  const H1 = styled.h1`
    font-size: 8rem;
    font-weight: 900;
    letter-spacing: -7px;
    display: block;
    white-space: nowrap;
    text-align: left;
    text-align: ${props => (props.primary ? "right" : "left")};

    @media ${device.laptopL} {
      text-align: center;
    }
  `;

  return (
    <>
      <H1 primary={props.primary}> {props.text}</H1>
    </>
  );
}

export default HeaderTitleText;
