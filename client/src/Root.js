import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Reset from "./features/Reset";
import IncidentCounter from "./features/IncidentCounter";
import EscalationCounter from "./features/EscalationCounter";
import PlayerTurn from "./features/PlayerTurn";

import { fetchCities } from "./app/redux/modules/Board";
import { fetchCards } from "./app/redux/modules/Deck";
import { fetchPassports } from "./app/redux/modules/Player";
import PlayerPanel from "features/PlayerPanel";
import Board from "features/Board";
import { Button, IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";

const App = ({ hands }) => {
  const dispatch = useDispatch();

  const [showBoard, setShowBoard] = useState(false);
  const handleBoard = () => {
    setShowBoard((state) => !state);
  };
  useEffect(() => {
    dispatch(fetchCities());
    dispatch(fetchCards());
    dispatch(fetchPassports());
  }, [dispatch]);

  return (
    <div className="App">
      <AppBar position="static" style={{ marginBottom: "1rem" }}>
        <Toolbar>
          <Typography variant="h6">Pandemic Player Cards</Typography>
          <div style={{ marginLeft: "2rem" }}>
            <PlayerTurn />
          </div>
          <div style={{ marginLeft: "2rem" }}>
            <EscalationCounter />
          </div>
          <div style={{ marginLeft: "2rem" }}>
            <IncidentCounter />
          </div>
          <div style={{ marginLeft: "2rem" }}>
            <Button variant="contained" onClick={handleBoard}>
              Show Board
            </Button>
          </div>
          <div style={{ flexGrow: 1, textAlign: "right" }}>
            <Reset />
          </div>
        </Toolbar>
      </AppBar>
      {!showBoard &&
        hands.map((hand, i) => <PlayerPanel key={`hand-${i}`} id={hand} />)}
      {showBoard && (
        <div
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: 9001,
            background: "white",
          }}
        >
          <IconButton onClick={handleBoard}>
            <Close />
          </IconButton>
          <Board />
        </div>
      )}
    </div>
  );
};

App.defaultProps = {
  hands: ["1", "2", "3", "4"],
};
export default App;
