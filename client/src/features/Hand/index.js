import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import cx from "classnames";
import PlayerCard from "features/PlayerCard";
import DiscardDeck from "./DiscardDeck";
import PlayerDeck from "./PlayerDeck";
import PlayerName from "./PlayerName";
import TurnTokenCounter from "./TurnTokenCounter";
import { name as deckName } from "app/redux/modules/Deck";
import "./Hand.scss";

const Hand = ({ id }) => {
  const [profileOpen, setProfileOpen] = useState(false);
  const state = useSelector((state) => state[deckName]);
  const hand = state[id].hand;
  const playerTurn = state.playerTurn.toString();
  return (
    <Paper
      className={cx({ Hand: true, isTurn: playerTurn === id })}
      elevation={playerTurn === id ? 4 : 2}
    >
      <div className="Hand__content">
        <div className="Hand__header">
          <Grid
            id={`Hand-Controls-${id}`}
            className="Hand__controls"
            container
            spacing={2}
          >
            <Grid item>
              <PlayerName id={id} />
            </Grid>
            <Grid item>
              <TurnTokenCounter id={id} />
            </Grid>
            <Grid item>
              <PlayerDeck id={`hand-player-${id}`} hand={id} />
            </Grid>
            <Grid item>
              <DiscardDeck id={`hand-discard-${id}`} hand={id} />
            </Grid>
            <Grid item>
              {hand.length > 7 && (
                <span className="Hand__warning">
                  Player has too many cards.
                </span>
              )}
            </Grid>
            <Grid item>
              <button
                style={{ width: "1.5rem", textAlign: "center" }}
                onClick={() => setProfileOpen((state) => !state)}
              >
                {profileOpen ? " - " : "+"}
              </button>
            </Grid>
          </Grid>
        </div>
        <div
          className={cx({
            Hand__cardContainer: true,
            hasCards: hand.length,
            isCollapsed: profileOpen,
          })}
        >
          <Grid container spacing={4}>
            {hand.map((card, i) => (
              <Grid item key={`Hand-${id}-card-${i}`} className="Hand__card">
                <PlayerCard key={card.id} hand={id} data={card} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </Paper>
  );
};

Hand.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.string),
};

export default Hand;
