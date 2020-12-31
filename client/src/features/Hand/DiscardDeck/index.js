import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { redraw } from "app/redux/modules/Deck";
import CardSelector from "../CardSelector";

const DiscardDeck = ({ id, hand }) => {
  const dispatch = useDispatch();
  const options = useSelector((state) => state.deck.discard);

  const handleChange = (value = "") => {
    if (value) {
      dispatch(redraw({ hand, card: value.toString() }));
    }
  };
  return (
    <CardSelector
      id={id}
      options={options ? options : []}
      label={"Discard Deck"}
      onChange={handleChange}
    />
  );
};

DiscardDeck.propTypes = {
  id: PropTypes.string,
  hand: PropTypes.string,
};

export default DiscardDeck;
