import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import Xfer from "@material-ui/icons/MobileScreenShare";
import Discard from "@material-ui/icons/Delete";
import { xfer, discard } from "app/redux/modules/Deck";

const hands = ["1", "2", "3", "4"];

const CardActions = ({ hand, card }) => {
  const dispatch = useDispatch();

  const players = useSelector((state) => state.player);

  const [isXferOpen, setXferOpen] = useState(null);
  const handleXfer = ({ target: { value = "" } = {} }) => {
    setXferOpen(null);
    if (value) {
      dispatch(xfer({ from: hand, to: value, card }));
    }
  };
  const handleDiscard = () => {
    dispatch(discard({ hand, card }));
  };

  const playerList = hands
    .filter((h) => h !== hand)
    .map((playerId) => players[playerId]);
  return (
    <Grid container alignItems="center" justify="flex-end" spacing={1}>
      <Grid item>
        <Button
          size="small"
          color="primary"
          onClick={(e) => {
            setXferOpen(e.currentTarget);
          }}
        >
          <Xfer />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={isXferOpen}
          keepMounted
          open={Boolean(isXferOpen)}
          onClose={handleXfer}
        >
          {playerList.map((player) => (
            <MenuItem value={player.id} onClick={handleXfer}>
              {player.name}
            </MenuItem>
          ))}
        </Menu>
      </Grid>
      <Grid item>
        <Button size="small" color="secondary" onClick={handleDiscard}>
          <Discard />
        </Button>
      </Grid>
    </Grid>
  );
};

CardActions.propTypes = {
  hand: PropTypes.string,
  card: PropTypes.string,
};

export default CardActions;
