import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import PlayerCard from "features/PlayerCard";
import DiscardDeck from "./DiscardDeck";
import PlayerDeck from "./PlayerDeck";
import { name as deckName } from "app/redux/modules/Deck";
import "./Hand.scss";

const Hand = ({ id }) => {
  const hand = useSelector((state) => state[deckName][id]);
  return (
    <div className="Hand">
      <Grid
        id={`Hand-Controls-${id}`}
        className="Hand__controls"
        container
        spacing={2}
      >
        <Grid item>
          <span className="Hand__title">{`Player ${id}`}</span>
        </Grid>
        <Grid item>
          <PlayerDeck id={`hand-player-${id}`} hand={id} />
        </Grid>
        <Grid item>
          <DiscardDeck id={`hand-discard-${id}`} hand={id} />
        </Grid>
        <Grid item>
          {hand.length > 7 && (
            <span className="Hand__warning">Player has too many cards.</span>
          )}
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        {hand.map((card, i) => (
          <Grid item style={{ position: "relative", paddingBottom: 0 }}>
            <PlayerCard key={card.id} hand={id} data={card} />
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
