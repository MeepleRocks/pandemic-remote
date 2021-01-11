import React from "react";
import PropTypes from "prop-types";
import { Button, Drawer } from "@material-ui/core";
import { useSelector } from "react-redux";
import { name as boardKey, increase, decrease } from "app/redux/modules/Board";

const BoardControls = (props) => {
  const { cities = [], activeCity } = useSelector((state) => state[boardKey]);
  const city = cities.find(({ id }) => activeCity);
  const handleIncrease = (key) => {
    console.log({ id: activeCity, key });
  };
  const handleDecrease = (key) => {
    console.log({ id: activeCity, key });
  };
  return (
    <Drawer>
      <div>
        {"Agents"}
        <Button onClick={() => handleIncrease("agents")}>Increase</Button>
        <Button onClick={() => handleDecrease("agents")}>Decrease</Button>
      </div>
      <div>
        {"Infection"}
        <Button onClick={() => handleIncrease("infection")}>Increase</Button>
        <Button onClick={() => handleDecrease("infection")}>Decrease</Button>
      </div>
      <div>
        {"Incident"}
        <Button onClick={() => handleIncrease("incident")}>Increase</Button>
        <Button onClick={() => handleDecrease("incident")}>Decrease</Button>
      </div>
    </Drawer>
  );
};

BoardControls.propTypes = {};

export default BoardControls;
