import React from "react";
import PropTypes from "prop-types";

import Neutral from "@material-ui/icons/Language";
import Commie from "@material-ui/icons/Star";
import Allied from "@material-ui/icons/Toys";

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
        <Allied style={{ color: "aqua" }} />
      </div>
    );
  }
  if (icon === "3") {
    return (
      <div style={{ ...container, background: "darkred" }}>
        <Commie style={{ color: "yellow" }} />
      </div>
    );
  }

  return (
    <div style={{ ...container, background: "slategray" }}>
      <Neutral style={{ color: "snow" }} />
    </div>
  );
};

Faction.propTypes = {
  icon: PropTypes.string,
};

export default Faction;
