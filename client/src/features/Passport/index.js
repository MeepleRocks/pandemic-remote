import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import PlayerFaction from "./PlayerFaction";
import AliasInfo from "./AliasInfo";
import "./Passport.scss";

const Passport = ({ id, isExpanded }) => {
  const { faction, passport = [] } = useSelector((state) => state.player[id]);
  const alias =
    passport.find((item) => {
      return item.faction === faction.toString();
    }) || {};
  return (
    <div className="Passport">
      <Grid container spacing={1} alignItems="center">
        <Grid item>
          <PlayerFaction id={id} />
        </Grid>
        <Grid item>{alias.name}</Grid>
      </Grid>
      <div style={{ paddingTop: "0.5rem" }}>
        <AliasInfo id={id} isExpanded={isExpanded} />
      </div>
    </div>
  );
};

Passport.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Passport;
