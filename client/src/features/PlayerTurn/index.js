import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import Meeple from "components/Meeple";
import { advanceTurn } from "app/redux/modules/Deck";

const PlayerTurn = () => {
  const dispatch = useDispatch();
  const playerTurn = useSelector((state) => state.deck.playerTurn);
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
      {`${playerTurn.toString()}`}
    </Button>
  );
};

export default PlayerTurn;
