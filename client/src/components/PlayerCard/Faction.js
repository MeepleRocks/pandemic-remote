import React from "react";
import PropTypes from "prop-types";

import Globe from "@material-ui/icons/Language";
import Star from "@material-ui/icons/Star";

const Faction = ({ icon }) => {
  const container = {
    display: "flex",
    alignItems: "center",
    justifyItems: "center",
    justifyContent: "center",
    width: "2rem",
    height: "2rem",
    margin: "0.25rem 0.5rem 0",
    borderRadius: "50%",
    textAlign: "center",
  };
  if (icon === "1") {
    return (
      <div style={{ ...container, background: "navy" }}>
        <Star style={{ color: "white" }} />
      </div>
    );
  }
  if (icon === "3") {
    return (
      <div style={{ ...container, background: "darkred" }}>
        <Star style={{ color: "yellow" }} />
      </div>
    );
  }

  return (
    <div style={{ ...container, background: "slategray" }}>
      <Globe style={{ color: "snow" }} />
    </div>
  );
};

Faction.propTypes = {};

export default Faction;
