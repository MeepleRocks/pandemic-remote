import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import cx from "classnames";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import ChevronRight from "@material-ui/icons/ChevronRight";
import PlayerName from "features/Passport/PlayerName";
import Hand from "features/Hand";
import Passport from "features/Passport";
import TurnTokenCounter from "features/Passport/TurnTokenCounter";
import { name as deckName } from "app/redux/modules/Deck";
import "./PlayerPanel.scss";

const PlayerPanel = ({ id }) => {
  const [isPassportOpen, setPassportOpen] = useState(false);
  const state = useSelector((state) => state[deckName]);
  console.log(state);
  const { turnId = "" } = state[id];
  const playerTurn = state.playerTurn.toString();
  return (
    <Paper
      className={cx({
        PlayerPanel: true,
        isTurn: playerTurn === id,
        isExpanded: isPassportOpen,
      })}
      elevation={playerTurn === id ? 4 : 2}
    >
      <div className="PlayerPanel__header">
        <Grid container spacing={1}>
          <Grid item>
            <PlayerName id={id} />
          </Grid>
          <Grid item>
            <span style={{ fontSize: "1rem" }}>{`Player ${turnId}`}</span>
          </Grid>
          <Grid item>
            <TurnTokenCounter id={id} />
          </Grid>
        </Grid>
      </div>
      <div className="PlayerPanel__content">
        <div>
          <Passport id={id} isExpanded={isPassportOpen} />
        </div>
        <div>
          <IconButton
            className="PlayerPanel__expand"
            size="small"
            onClick={() => setPassportOpen((state) => !state)}
          >
            <ChevronRight fontSize="small" />
          </IconButton>
        </div>
        <div>
          <div container className="PlayerPanel__hand">
            <Hand id={id} />
          </div>
        </div>
      </div>
    </Paper>
  );
};

PlayerPanel.propTypes = {
  id: PropTypes.string.isRequired,
};

export default PlayerPanel;
