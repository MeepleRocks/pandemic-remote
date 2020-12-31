import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { reset } from "app/redux/modules/Deck";
import Button from "@material-ui/core/Button";

const Reset = (props) => {
  const dispatch = useDispatch();
  const [isResetting, setIsResetting] = useState("");

  const handleClick = () => {
    if (!isResetting) {
      setIsResetting("Really?");
    } else {
      dispatch(reset());
      setIsResetting("");
    }
  };
  return (
    <Button variant="contained" color="secondary" onClick={handleClick}>
      {isResetting ? isResetting : "Reset"}
    </Button>
  );
};

export default Reset;
