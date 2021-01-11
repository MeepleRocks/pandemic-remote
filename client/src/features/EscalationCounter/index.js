import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Escalation from "@material-ui/icons/SignalCellularAlt";
import Counter from "components/Counter";
import { name as deckKey, increase, decrease } from "app/redux/modules/Deck";

const EscalationCounter = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state[deckKey].escalation);

  const handleDecrease = () => {
    dispatch(decrease("escalation"));
  };
  const handleIncrease = () => {
    dispatch(increase("escalation"));
  };
  return (
    <Counter
      title={<Escalation style={{ color: "firebrick" }} />}
      onDecrease={handleDecrease}
      onIncrease={handleIncrease}
      decreaseDisabled={value <= 0}
      value={value.toString()}
    />
  );
};

export default EscalationCounter;
