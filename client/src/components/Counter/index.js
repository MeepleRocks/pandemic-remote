import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Increase from "@material-ui/icons/AddCircle";
import Decrease from "@material-ui/icons/RemoveCircle";
import cx from "classnames";
import "./Counter.scss";

const Counter = ({
  title,
  value,
  variant,
  onDecrease,
  decreaseDisabled,
  onIncrease,
  increaseDisabled,
}) => {
  return (
    <Paper
      className={cx({ Counter: true, [variant]: variant })}
      variant={variant}
    >
      {title && <span className="Counter__title">{title}</span>}
      <Button
        className="Counter__decrease"
        onClick={onDecrease}
        size="small"
        disabled={decreaseDisabled}
      >
        <Decrease />
      </Button>
      <span className="Counter__value">{value}</span>
      <Button
        className="Counter__increase"
        onClick={onIncrease}
        size="small"
        disabled={increaseDisabled}
      >
        <Increase />
      </Button>
    </Paper>
  );
};

Counter.defaultProps = {
  value: 0,
  name: "",
  onDecrease: () => null,
  onIncrease: () => null,
};

Counter.propTypes = {
  title: PropTypes.node,
  value: PropTypes.string,
  onDecrease: PropTypes.func,
  onIncrease: PropTypes.func,
  decreaseDisabled: PropTypes.bool,
  increaseDisabled: PropTypes.bool,
};

export default Counter;
