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
        lineHeight: 1,
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
          boxShadow: "0px 0px 4px rgba(85,85,85, 0.25)",
        }}
      >
        <div
          style={{
            marginBottom: "2rem",
            fontWeight: 700,
          }}
        >
          {name}
        </div>
        <div
          style={{
            background: "antiquewhite",
            padding: "1rem",
            fontSize: "0.75rem",
          }}
        >
          <div
            style={{
              marginBottom: "0.5rem",
              paddingBottom: "0.5rem",
              borderBottom: "1px solid black",
            }}
          >
            {description}
          </div>
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
