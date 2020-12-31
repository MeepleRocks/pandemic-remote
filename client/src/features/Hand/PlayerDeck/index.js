import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { draw } from "app/redux/modules/Deck";
import CardSelector from "../CardSelector";

const PlayerDeck = ({ id, hand }) => {
  const dispatch = useDispatch();
  const options = useSelector((state) => state.deck.deck);

  const handleChange = (value = "") => {
    console.log(value);
    if (value) {
      dispatch(draw({ hand, card: value.toString() }));
    }
  };
  return (
    <CardSelector
      id={id}
      options={options ? options : []}
      label={"Player Deck"}
      onChange={handleChange}
    />
  );
};

PlayerDeck.propTypes = {
  id: PropTypes.string,
  hand: PropTypes.string,
};

export default PlayerDeck;
