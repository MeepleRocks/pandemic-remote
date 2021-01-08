import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import Meeple from "components/Meeple";
import { advanceTurn } from "app/redux/modules/Deck";

const PlayerTurn = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const playerTurn = state.deck.playerTurn;

  const players = state.player;
  const handleClick = () => {
    dispatch(advanceTurn());
  };

  return (
    <Button
      variant="contained"
      onClick={handleClick}
      style={{ minWidth: "unset" }}
    >
      <Meeple />
      <span style={{ display: "inline-block", marginLeft: "0.5rem" }}>
        {players[playerTurn].name}
      </span>
    </Button>
  );
};

export default PlayerTurn;
