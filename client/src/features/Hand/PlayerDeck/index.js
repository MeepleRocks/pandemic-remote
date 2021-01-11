import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { name as deckKey, draw } from "app/redux/modules/Deck";
import CardSelector from "components/CardSelector";

const PlayerDeck = ({ id }) => {
  const dispatch = useDispatch();
  const options = useSelector((state) => state[deckKey].deck);

  const handleChange = (value = "") => {
    if (value) {
      dispatch(draw({ hand: id, card: value.toString() }));
    }
  };
  return (
    <CardSelector
      id={`PlayerDeck-${id}`}
      options={options ? options : []}
      label={"Player Deck"}
      onChange={handleChange}
    />
  );
};

PlayerDeck.propTypes = {
  id: PropTypes.string.isRequired,
};

export default PlayerDeck;
