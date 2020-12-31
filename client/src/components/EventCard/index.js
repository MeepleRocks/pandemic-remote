import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";

const EventCard = ({ name, description, condition }) => {
  return (
    <Paper
      style={{
        display: "inline-block",
        position: "relative",
        margin: "1rem",
        padding: "0.5rem",
        width: "12rem",
        height: "18rem",
        background: "beige",
      }}
    >
      <div
        style={{
          lineHeight: 1,
          height: "100%",
          padding: "1rem",
          textAlign: "center",
          background: "orangered",
          boxShadow: "0px 0px 4px rgba(0,0,0,0.15)",
        }}
      >
        <span
          style={{
            display: "block",
            marginBottom: "2rem",
            fontWeight: 700,
          }}
        >
          {name}
        </span>
        <div
          style={{
            background: "antiquewhite",
            padding: "1rem",
            fontSize: "0.75rem",
          }}
        >
          <div style={{}}>{description}</div>
          <hr
            style={{
              margin: "1rem 0",
              borderTop: "1px solid black",
              color: "transparent",
            }}
          />
          <div>{condition}</div>
        </div>
      </div>
    </Paper>
  );
};

EventCard.propTypes = {
  name: PropTypes.string,
  region: PropTypes.shape({ id: PropTypes.string, name: PropTypes.string }),
  faction: PropTypes.shape({ id: PropTypes.string, name: PropTypes.string }),
  number: PropTypes.string,
};

export default EventCard;
