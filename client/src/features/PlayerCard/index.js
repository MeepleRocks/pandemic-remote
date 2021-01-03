import React from "react";
import PropTypes from "prop-types";
import EventCard from "./EventCard";
import CityCard from "./CityCard";
import CardActions from "./CardActions";
import "./PlayerCard.scss";

const Card = ({ hand, data }) => {
  return (
    <div className="PlayerCard">
      {!data.number ? <EventCard {...data} /> : <CityCard {...data} />}

      <div className="PlayerCard__actions">
        <CardActions hand={hand} card={data.id} />
      </div>
    </div>
  );
};

Card.propTypes = {
  hand: PropTypes.string,
  data: PropTypes.object,
};

export default Card;
