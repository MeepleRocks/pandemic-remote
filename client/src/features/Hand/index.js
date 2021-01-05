import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import cx from "classnames";
import Grid from "@material-ui/core/Grid";
import PlayerCard from "features/PlayerCard";
import DeckControls from "./DeckControls";
import { name } from "app/redux/modules/Deck";
import "./Hand.scss";

const Hand = ({ id, isCollapsed }) => {
  const data = useSelector((state) => state[name][id]);
  const { hand = [] } = data;
  return (
    <Grid
      container
      className={cx({ Hand: true, isCollapsed: isCollapsed })}
      spacing={2}
    >
      {hand.map((card, i) => (
        <Grid item key={`Hand-${id}-card-${i}`} className="Hand__card">
          <PlayerCard key={card.id} hand={id} data={card} />
        </Grid>
      ))}
      <Grid
        item
        key={`Hand-${id}-card-control`}
        className="Hand__card--controls"
      >
        <DeckControls id={id} />
      </Grid>
    </Grid>
  );
};

Hand.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.string),
};

export default Hand;
