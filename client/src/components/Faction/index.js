import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Neutral from "@material-ui/icons/Language";
import Communist from "@material-ui/icons/Star";
import Allied from "@material-ui/icons/Toys";
import Event from "@material-ui/icons/DoubleArrow";
import "./Faction.scss";

const Faction = ({ id }) => {
  const icons = {
    1: Allied,
    2: Neutral,
    3: Communist,
    4: Event,
  };
  const factionId = !(id in icons) ? "4" : id;
  const Comp = factionId in icons ? icons[factionId] : icons["4"];
  return (
    <span
      className={cx({
        Faction: true,
        allied: id === "1",
        neutral: id === "2",
        communist: id === "3",
        event: !(id in icons),
      })}
    >
      {Comp && <Comp />}
    </span>
  );
};

Faction.propTypes = {
  id: "4",
};

Faction.propTypes = {
  id: PropTypes.string,
};

export default Faction;
