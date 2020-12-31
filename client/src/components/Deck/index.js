import React from "react";
import PropTypes from "prop-types";
import { gql, useQuery } from "@apollo/client";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const Deck = ({ id, hand, onDraw }) => {
  const handIds = hand.reduce((acc, cur) => [...acc, cur.id], []);
  const Q_CARDS = gql`
    query Cards {
      cards {
        id
        name
      }
    }
  `;
  // get deck cards
  // get global hand cards
  // filter out hand cards from deck
  // add card to hand
  const { data: { cards = [] } = {} } = useQuery(Q_CARDS);
  const deck = cards.filter((item) => !handIds.includes(item.id));

  const handleChange = ({ target: { value = "" } = {} }) => {
    if (value) {
      onDraw(value);
    }
  };
  return (
    <FormControl style={{ margin: "0 1rem" }}>
      <InputLabel id={id}>Deck</InputLabel>
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
