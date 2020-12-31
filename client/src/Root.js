import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { fetchCards } from "./app/redux/modules/Deck";
import Hand from "./components/Hand";
import Reset from "./components/Reset";

const App = () => {
  const dispatch = useDispatch();

  const hands = ["1", "2", "3", "4"];

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch, hands]);

  return (
    <div className="App">
      <AppBar position="static">
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

export default App;
