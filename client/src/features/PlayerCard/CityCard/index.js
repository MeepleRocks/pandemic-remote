import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Faction from "components/Faction";
import Region from "./Region";
import Number from "./Number";

const CityCard = ({ name, region, faction, number }) => {
  return (
    <Paper
      elevation={5}
      style={{
        display: "inline-block",
        position: "relative",
        padding: " 0.75rem 0.5rem 0.25rem",
        width: "12rem",
        height: "18rem",
        maxWidth: "12rem",
        maxHeight: "18rem",
        lineHeight: 1,
        background: "beige",
      }}
    >
      <div
        style={{
          lineHeight: 1,
          minHeight: "100%",
          background: "antiquewhite",
          boxShadow: "0px 0px 4px rgba(85,85,85, 0.25)",
        }}
      >
        <Grid container spacing={1} style={{ alignItems: "center" }}>
          <Grid item xs={3}>
            <div style={{ paddingLeft: "0.25rem" }}>
              <Faction id={faction.id} />
            </div>
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
