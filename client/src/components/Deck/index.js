import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { draw, redraw } from "app/redux/modules/Deck";

const Deck = ({ id, hand, label, location = "deck" }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.deck);
  const deck = state[location];

  const handleChange = ({ target: { value = "" } = {} }) => {
    if (location === "discard") {
      dispatch(redraw({ hand, card: value }));
    } else {
      dispatch(draw({ hand, card: value }));
    }
  };
  return (
    <FormControl>
      <InputLabel id={id}>{label}</InputLabel>
      <Select
        labelId={id}
        style={{ minWidth: "12rem" }}
        value=""
        onChange={handleChange}
      >
        <MenuItem key={"empty"} value={""} />
        {deck.map((card) => (
          <MenuItem key={card.id} value={card.id}>
            {card.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

Deck.propTypes = { hand: PropTypes.string };

export default Deck;
