import React, { useState } from "react";
import PropTypes from "prop-types";
import PlayerDeck from "../PlayerDeck";
import DiscardDeck from "../DiscardDeck";
import "./DeckControls.scss";
import IconButton from "@material-ui/core/IconButton";
import Add from "@material-ui/icons/Add";
import { Drawer, Grid } from "@material-ui/core";

const DeckControls = ({ id }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="DeckControls">
      <Grid
        container
        alignItems="center"
        justify="center"
        style={{
          height: "100%",
        }}
      >
        <IconButton size="medium" onClick={() => setOpen(() => true)}>
          <Add fontSize="large" />
        </IconButton>
      </Grid>
      <Drawer anchor="right" open={isOpen} onClose={() => setOpen(() => false)}>
        <div style={{ marginBottom: "1rem" }}>
          <PlayerDeck id={id} />
        </div>
        <div>
          <DiscardDeck id={id} />
        </div>
      </Drawer>
    </div>
  );
};

DeckControls.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DeckControls;
