import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Faction from "./Faction";
import Region from "./Region";
import Number from "./Number";

const CityCard = ({ name, region, faction, number }) => {
  return (
    <Paper
      style={{
        display: "inline-block",
        position: "relative",
        margin: "1rem",
        padding: " 0.75rem 0.5rem 0.25rem",
        width: "12rem",
        height: "18rem",
        background: "beige",
        lineHeight: 0,
      }}
    >
      <div
        style={{
          lineHeight: 1,
          height: "100%",
          background: "antiquewhite",
          boxShadow: "0px 0px 4px rgba(0,0,0,0.1)",
        }}
      >
        <Grid container spacing={1} style={{ alignItems: "center" }}>
          <Grid item xs={3}>
            <Faction icon={faction.id} />
          </Grid>
          <Grid item xs={9}>
            <span
              style={{
                lineHeight: 0,
                fontWeight: 700,
                textTransform: "uppercase",
              }}
            >
              {name}
            </span>
          </Grid>
        </Grid>
        <div
          style={{
            position: "absolute",
            bottom: "3rem",
            left: "0.5rem",
            lineHeight: 1,
          }}
        >
          <Region id={region.id} name={region.name} />
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "0.75rem",
            left: "1rem",
            lineHeight: 1,
          }}
        >
          <Number value={number} />
        </div>
      </div>
    </Paper>
  );
};

CityCard.propTypes = {
  name: PropTypes.string,
  region: PropTypes.shape({ id: PropTypes.string, name: PropTypes.string }),
  faction: PropTypes.shape({ id: PropTypes.string, name: PropTypes.string }),
  number: PropTypes.string,
};

export default CityCard;
