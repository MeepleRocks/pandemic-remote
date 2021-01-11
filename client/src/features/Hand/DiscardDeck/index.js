import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { name as deckKey, redraw } from "app/redux/modules/Deck";
import CardSelector from "components/CardSelector";

const DiscardDeck = ({ id }) => {
  const dispatch = useDispatch();
  const options = useSelector((state) => state[deckKey].discard);

  const handleChange = (value = "") => {
    if (value) {
      dispatch(redraw({ hand: id, card: value.toString() }));
    }
  };
  return (
    <CardSelector
      id={`DiscardDeck-${id}`}
      options={options ? options : []}
      label={"Discard Deck"}
      onChange={handleChange}
    />
  );
};

DiscardDeck.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DiscardDeck;
