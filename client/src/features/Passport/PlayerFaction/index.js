import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/IconButton";
import Faction from "components/Faction";
import { name as playerKey, changeFaction } from "app/redux/modules/Player";

const PlayerFaction = ({ id }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state[playerKey][id]);

  const { faction } = data;
  const handleClick = () => {
    dispatch(changeFaction(id));
  };

  return (
    <Button
      style={{ padding: 0, margin: 0 }}
      size="small"
      onClick={handleClick}
    >
      <Faction id={faction.toString()} />
    </Button>
  );
};

PlayerFaction.propTypes = {
  id: PropTypes.string.isRequired,
};

export default PlayerFaction;
