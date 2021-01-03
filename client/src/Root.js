import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { fetchCards } from "./app/redux/modules/Deck";
import Hand from "./features/Hand";
import Reset from "./features/Reset";

const App = ({ hands }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  return (
    <div className="App">
      <AppBar position="static" style={{ marginBottom: "1rem" }}>
        <Toolbar>
          <Typography style={{ flexGrow: 1 }} variant="h6">
            Pandemic Player Cards
          </Typography>
          <Reset />
        </Toolbar>
      </AppBar>
      {hands.map((hand, i) => (
        <Hand key={`hand-${i}`} id={hand} />
      ))}
    </div>
  );
};

App.defaultProps = {
  hands: ["1", "2", "3", "4"],
};
export default App;
