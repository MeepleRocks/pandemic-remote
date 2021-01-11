import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Incident from "@material-ui/icons/Error";
import Counter from "components/Counter";
import { name as deckKey, increase, decrease } from "app/redux/modules/Deck";
import "./Incident.scss";

const IncidentCounter = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state[deckKey].incident);

  const handleDecrease = () => {
    dispatch(decrease("incident"));
  };
  const handleIncrease = () => {
    dispatch(increase("incident"));
  };
  return (
    <Counter
      title={
        <span className="Incident">
          <Incident style={{ color: "white" }} />
        </span>
      }
      onDecrease={handleDecrease}
      onIncrease={handleIncrease}
      decreaseDisabled={value <= 0}
      value={value.toString()}
    />
  );
};

export default IncidentCounter;
