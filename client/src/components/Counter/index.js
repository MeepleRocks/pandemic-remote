import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/IconButton";
import Increase from "@material-ui/icons/AddCircle";
import Decrease from "@material-ui/icons/RemoveCircle";
import "./Counter.scss";

const index = ({ value, onDecrease, onIncrease }) => {
  return (
    <div className="Counter">
      <Button className="Counter__decrease" onClick={onDecrease}>
        <Decrease />
      </Button>
      <span className="Counter__value">{value}</span>
      <Button className="Counter__increase" onClick={onIncrease}>
        <Increase />
      </Button>
    </div>
  );
};

index.propTypes = {
  value: PropTypes.string,
  onDecrease: PropTypes.func,
  onIncrease: PropTypes.func,
};

export default index;
