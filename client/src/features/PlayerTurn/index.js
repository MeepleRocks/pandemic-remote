import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import Meeple from "components/Meeple";
import { name as deckKey, advanceTurn } from "app/redux/modules/Deck";

import { name as playerKey } from "app/redux/modules/Player";

import {} from "app/redux/modules/Player";

const PlayerTurn = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const playerTurn = state[deckKey].playerTurn;
  const players = state[playerKey];
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
