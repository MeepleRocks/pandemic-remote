import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import Icon from "@material-ui/core/SvgIcon";
import Clock from "@material-ui/icons/AccessTime";
import Counter from "components/Counter";
import { addTurnToken, removeTurnToken } from "app/redux/modules/Deck";
import "./TurnTokenCounter.scss";

const TurnTokenCounter = ({ id }) => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.deck[id].turnTokens);

  const handleDecrease = () => {
    dispatch(removeTurnToken(id));
  };
  const handleIncrease = () => {
    dispatch(addTurnToken(id));
  };
  return (
    <Counter
      variant="flat"
      title={
        <span className="TurnToken">
          <Icon>
            <Clock />
          </Icon>
        </span>
      }
      onDecrease={handleDecrease}
      onIncrease={handleIncrease}
      decreaseDisabled={value <= 0}
      value={value ? value.toString() : "0"}
    />
  );
};

TurnTokenCounter.propTypes = {
  id: PropTypes.string,
};

export default TurnTokenCounter;
