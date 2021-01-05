import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import cx from "classnames";
import { Grid, IconButton, Paper } from "@material-ui/core";
import PlayerName from "features/Passport/PlayerName";
import Hand from "features/Hand";
import TurnTokenCounter from "features/Passport/TurnTokenCounter";

import { name as deckName } from "app/redux/modules/Deck";
import Passport from "features/Passport";
import "./PlayerPanel.scss";

const PlayerPanel = ({ id }) => {
  const [isPassportOpen, setPassportOpen] = useState(false);
  const state = useSelector((state) => state[deckName]);
  const playerTurn = state.playerTurn.toString();
  return (
    <Paper
      className={cx({ PlayerPanel: true, isTurn: playerTurn === id })}
      elevation={playerTurn === id ? 4 : 2}
    >
      <div className="PlayerPanel__header">
        <Grid container spacing={1}>
          <Grid item>
            <PlayerName id={id} />
          </Grid>
          <Grid item>
            <TurnTokenCounter id={id} />
          </Grid>
        </Grid>
      </div>
      <div className="PlayerPanel__content">
        <Grid container spacing={2} style={{ alignItems: "stretch" }}>
          <Grid item>
            <Passport id={id} isExpanded={isPassportOpen} />
          </Grid>
          <Grid item>
            <IconButton onClick={() => setPassportOpen((state) => !state)}>
              {isPassportOpen ? "-" : "+"}
            </IconButton>
          </Grid>
          <Grid item>
            <div container className="PlayerPanel__hand">
              <Hand id={id} isCollapsed={!isPassportOpen} />
            </div>
          </Grid>
        </Grid>
      </div>
    </Paper>
  );
};

PlayerPanel.propTypes = {
  id: PropTypes.string.isRequired,
};

export default PlayerPanel;
