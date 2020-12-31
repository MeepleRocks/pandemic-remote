import React from "react";
import PropTypes from "prop-types";

import { useSelector } from "react-redux";

import Grid from "@material-ui/core/Grid";
import EventCard from "components/EventCard";
import CityCard from "components/CityCard";
import Deck from "components/Deck";
import { name as deckName } from "app/redux/modules/Deck";
import CardActions from "../CardActions";

const Hand = ({ id }) => {
  const hand = useSelector((state) => state[deckName][id]);
  return (
    <div
      style={{
        padding: "0 2rem 1rem",
        borderBottom: "1px solid lightgray",
      }}
    >
      <Grid
        container
        spacing="2"
        style={{ alignItems: "flex-end", marginBottom: "2rem" }}
      >
        <Grid item>
          <span
            style={{
              display: "inline-block",
              marginBottom: "0.5rem",
              fontSize: "1rem",
              lineHeight: 1,
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >{`Player ${id}`}</span>
        </Grid>
        <Grid item>
          <Deck id={`hand-${id}`} hand={id} label="Player Deck" />
        </Grid>
        <Grid item>
          <Deck
            id={`hand-discard-${id}`}
            hand={id}
            location="discard"
            label="Discard Deck"
          />
        </Grid>
        <Grid item>
          {hand.length > 7 && (
            <span
              style={{
                fontWeight: 700,
                lineHeight: 1,
                color: "red",
                display: "inline-block",
                marginBottom: "0.5rem",
              }}
            >
              Player has too many cards.
            </span>
          )}
        </Grid>
      </Grid>
      <Grid container spacing="4">
        {hand.map((card, i) => (
          <Grid item style={{ position: "relative" }}>
            {!card.number ? <EventCard {...card} /> : <CityCard {...card} />}

            <div style={{ marginTop: "0.5rem" }}>
              <CardActions hand={id} card={card.id} />
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Hand.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.string),
};

export default Hand;
