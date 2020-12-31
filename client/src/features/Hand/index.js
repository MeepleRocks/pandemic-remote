import React from "react";
import PropTypes from "prop-types";

import { useSelector } from "react-redux";

import Grid from "@material-ui/core/Grid";
import EventCard from "features/EventCard";
import CityCard from "features/CityCard";
import CardActions from "features/CardActions";
import DiscardDeck from "./DiscardDeck";
import PlayerDeck from "./PlayerDeck";

import { name as deckName } from "app/redux/modules/Deck";

const Hand = ({ id }) => {
  const hand = useSelector((state) => state[deckName][id]);
  return (
    <div
      style={{
        padding: "1.5rem 2rem 2rem",
        borderBottom: "1px solid lightgray",
      }}
    >
      <Grid
        id={`Hand-Controls-${id}`}
        container
        spacing={2}
        style={{
          alignItems: "flex-end",
          marginBottom: "1rem",
        }}
      >
        <Grid item>
          <span
            style={{
              display: "inline-block",
              marginBottom: "0.75rem",
              fontSize: "1rem",
              lineHeight: 1,
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >{`Player ${id}`}</span>
        </Grid>
        <Grid item>
          <PlayerDeck id={`hand-player-${id}`} hand={id} />
        </Grid>
        <Grid item>
          <DiscardDeck id={`hand-discard-${id}`} hand={id} />
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
      <Grid container spacing={4}>
        {hand.map((card, i) => (
          <Grid item style={{ position: "relative", paddingBottom: 0 }}>
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
