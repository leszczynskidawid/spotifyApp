import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";

function Logo() {
  return (
    <>
      <FontAwesomeIcon style={{ color: "white" }} icon={faSpotify} />
    </>
  );
}

export default Logo;
