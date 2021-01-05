import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { fetchCards } from "./app/redux/modules/Deck";
import Reset from "./features/Reset";
import IncidentCounter from "./features/IncidentCounter";
import EscalationCounter from "./features/EscalationCounter";
import PlayerTurn from "./features/PlayerTurn";
import { fetchPassports } from "./app/redux/modules/Player";
import PlayerPanel from "features/PlayerPanel";

const App = ({ hands }) => {
  const dispatch = useDispatch();

  useEffect(() => {
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
          <div style={{ flexGrow: 1, textAlign: "right" }}>
            <Reset />
          </div>
        </Toolbar>
      </AppBar>
      {hands.map((hand, i) => (
        <PlayerPanel key={`hand-${i}`} id={hand} />
      ))}
    </div>
  );
};

App.defaultProps = {
  hands: ["1", "2", "3", "4"],
};
export default App;
