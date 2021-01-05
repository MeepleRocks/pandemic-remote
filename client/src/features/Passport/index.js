import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import PlayerFaction from "./PlayerFaction";
import AliasInfo from "./AliasInfo";

const Passport = ({ id, isExpanded }) => {
  const { faction, passport = [] } = useSelector((state) => state.player[id]);
  const alias =
    passport.find((item) => {
      return item.faction === faction.toString();
    }) || {};
  return (
    <div className="Passport" style={{ padding: "1rem 0 1rem 1rem" }}>
      <div>
        <Grid container style={{ alignItems: "center" }} spacing={1}>
          <Grid item>
            <PlayerFaction id={id} />
          </Grid>
          <Grid item>{alias.name}</Grid>
        </Grid>
        <AliasInfo id={id} isExpanded={isExpanded} />
      </div>
    </div>
  );
};

Passport.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Passport;
