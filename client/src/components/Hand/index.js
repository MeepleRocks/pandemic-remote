import React, { useState } from "react";
import PropTypes from "prop-types";
import { useQuery, gql } from "@apollo/client";
import Grid from "@material-ui/core/Grid";
import EventCard from "components/EventCard";
import CityCard from "components/CityCard";
import Deck from "components/Deck";

const Hand = () => {
  const [hand, setHand] = useState([]);

  const Q_CARDS = gql`
    query Cards {
      cards {
        id
        name
        region {
          name
          id
        }
        faction {
          name
          id
        }
        number
        description
        condition
      }
    }
  `;
  const { data: { cards = [] } = {} } = useQuery(Q_CARDS);

  const handleDraw = (id) => {
    const card = cards.find((item) => item.id === id);
    setHand((state) => [...state, card]);
  };

  return (
    <div>
      <Deck hand={hand} onDraw={handleDraw} />
      <Grid
        container
        style={{ padding: "4rem", borderBottom: "1px solid darkslategray" }}
      >
        {hand.map((card) => (
          <div style={{ display: "inline" }}>
            {!card.number ? <EventCard {...card} /> : <CityCard {...card} />}
          </div>
        ))}
      </Grid>
    </div>
  );
};

Hand.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.string),
};

export default Hand;
