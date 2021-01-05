import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";
import { setName } from "app/redux/modules/Player";

const PlayerName = ({ id }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.player);
  const name = state[id].name;

  const handleChange = ({ target: { value = "" } = {} }) => {
    dispatch(setName({ id, value }));
  };
  return (
    <TextField
      className="PlayerName"
      size="small"
      label="Name"
      value={name}
      variant="outlined"
      onChange={handleChange}
    />
  );
};

PlayerName.propTypes = {
  id: PropTypes.string.isRequired,
};

export default PlayerName;
